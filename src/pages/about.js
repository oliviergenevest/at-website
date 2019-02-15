import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import SEO from '../components/seo'


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
                sizes(maxWidth: 1600) {
                  ...GatsbyContentfulSizes
                }     
        }
      }
    }
  `}

    render={({contentfulAboutAlanPage}) => (
              <Layout>
                <SEO title={contentfulAboutAlanPage.slug} keywords={[`alan tod`, `forest`, `art`]} />
             <Img sizes={contentfulAboutAlanPage.imagePortraitAlan.sizes} style={{'marginBottom':'2rem'}}/>
             <Container text>
             <div dangerouslySetInnerHTML={{__html:contentfulAboutAlanPage.content.childMarkdownRemark.html}}></div>
                
                
            </Container>
              </Layout>
            )
  }
/>
)
export default About