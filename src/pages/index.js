import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import { StaticQuery, graphql } from 'gatsby'
import SEO from '../components/seo'
import Grid1 from '../components/Grid/Grid1'

const ImageHomepageSection1 = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "forest-homepage.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={ data => <Img 
    fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)




const IndexPage = () => {
 
   return (
      <>
          <SEO title="Alan Tod - Forest is art" keywords={[`Alan Tod`, `forest`, `artist`, `art`]} />
          <Grid1 
            image = { <ImageHomepageSection1 /> } 
            heroText = {{text:'ALAN TOD'}} 
            text1= {{text:'Forest is art'}} 
          />   
      </>
)
}

export default IndexPage