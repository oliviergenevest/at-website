import React from 'react'
import { graphql, Link} from 'gatsby'
import { FormattedMessage } from 'react-intl'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image' 
import Container from '../components/Container/Container'
import PostLinks from '../components/PostLinks'
import styles from './project.module.scss'
import LocalizedLink from '../components/LocalizedLink/LocalizedLink'

const PostTemplate = ({ data, pageContext }) => {
  const {
    title,
    /*slug,*/
    heroImage,
    description,
    updatedAt,
    
  } = data.contentfulProject
 /*const postNode = data.contentfulProject*/
  const previous = pageContext.prev
  const next = pageContext.next

  return (
    <Layout locale={pageContext.locale}>
    
       <SEO title={title} keywords={[`alan tod`, `alan tod`, `react`]} />
   
   <div className={styles.projectWrapper}>
    <div className={styles.projectSideColumnFixed}>
      <div className={styles.header}> 
        <LocalizedLink to='/projects' className={styles.backLink}>  &#8592; <span>Back</span></LocalizedLink>
        <h1> {title}</h1>
      </div>
      <div className={styles.heroImg}>
          <Img
            
            fluid={heroImage.fluid}
            backgroundColor={'transparent'}
            className = {styles.bgImg}
          />
        
      </div>
    </div>
   
    <div className={styles.projectContent}>
      <article>
          <Container text >
           
              <div dangerouslySetInnerHTML={{ __html: description.childMarkdownRemark.html }}
              ></div>
             <p> <FormattedMessage id="cta_portfolio_on_demand"/>
              <LocalizedLink to="/about#contact"><FormattedMessage id="cta_portfolio_on_demand_link"/></LocalizedLink>.</p>


         </Container>

          <Container text >
           <span>Last update:</span> {updatedAt}
          </Container>

          <PostLinks previous={previous} next={next} />

      </article>

    </div>
  </div>
     
      
      
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $locale: String!) {
    contentfulProject(
    slug: { eq: $slug }
    node_locale: {eq: $locale }
    ) {
      title
      slug
      updatedAt(formatString: "MMMM DD, YYYY")
      updatedAtISO: updatedAt(formatString: "YYYY-MM-DD")
   
      heroImage {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp
        }
        ogimg: resize(width: 1200) {
          src
          width
          height
        }
      }
      description {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default PostTemplate