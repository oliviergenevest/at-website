import React from 'react'
import { /*Link,*/ StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import SEO from '../components/seo'
import ContactForm from '../components/ContactForm/ContactForm'



const About = () => (

  <StaticQuery
    query={graphql`
      query  AboutPage  {
      contentfulAboutAlanPage {
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
  `}

    render={({contentfulAboutAlanPage}) => (
              <Layout>
                <SEO title={contentfulAboutAlanPage.slug} keywords={[`alan tod`, `forest`, `art`]} />
               
             <Img fluid={contentfulAboutAlanPage.imagePortraitAlan.fluid} style={{'marginBottom':'2rem'}}/>
             <Container text >
             <div dangerouslySetInnerHTML={{__html:contentfulAboutAlanPage.content.childMarkdownRemark.html}}></div>
                
                 <ContactForm/>
            </Container>
              </Layout>
            )
  }
/>
)
export default About