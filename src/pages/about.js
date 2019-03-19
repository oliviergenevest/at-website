import React from 'react'
import { /*Link,StaticQuery,*/  graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import SEO from '../components/seo'
import ContactForm from '../components/ContactForm/ContactForm'



 
export default ({pageContext, data}) => {

  return (
              <Layout locale={pageContext.locale}>
                 <SEO title={data.contentfulAboutAlanPage.slug} keywords={[`alan tod`, `forest`, `art`]} />       
                 <Img fluid={data.contentfulAboutAlanPage.imagePortraitAlan.fluid} style={{'marginBottom':'2rem'}}/>
                 <Container text >
                   <div dangerouslySetInnerHTML={{__html:data.contentfulAboutAlanPage.content.childMarkdownRemark.html}}></div>   
                   <ContactForm/>
                 </Container>
              </Layout>
  )
  
}
 



export const pageQuery = graphql`
   query aboutPage($locale: String!)
     {
      contentfulAboutAlanPage(node_locale: {eq: $locale }) {
        slug
        content {
          childMarkdownRemark {
            html
          }
        }
        imagePortraitAlan {
                fluid(maxWidth: 1600) {
                  ...GatsbyContentfulFluid_withWebp
                }     
        }
      }
    }
`