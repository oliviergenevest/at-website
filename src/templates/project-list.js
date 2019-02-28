import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import CardList from '../components/CardList'
import Card from '../components/Card'

import Container from '../components/Container/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/seo'


const ProjectListTemplate = ({ data, pageContext }) => {
  const posts = data.allContentfulProject.edges
  const featuredPost = posts[0].node
  const { currentPage } = pageContext
  const isFirstPage = currentPage === 1
 

  return (
    <Layout>
    <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
      
      <Container fluid first>
        {isFirstPage ? (
        <> 
          
           
             
          <CardList>
           
            <Card {...featuredPost} featured />
            {posts.slice(1).map(({ node: post }) => (
              <Card key={post.id} {...post} />
            ))} 
          </CardList>

        </>
        ) : (
           <CardList>
            {posts.map(({ node: post }) => (
              <Card key={post.id} {...post} />
            ))} 

          </CardList>

        )}
      </Container>
      <Pagination context={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulProject(
      sort: { fields: [updatedAt], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          id
          slug
          updatedAt(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 180)
            }
          }
        }
      }
    }
  }
`

export default ProjectListTemplate