import React from 'react'
import { /*Link,*/ StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import SEO from '../components/seo'
import { Fade } from "react-reveal"
import styles from './reasearch.module.scss'

const Research = () => (
  <StaticQuery
    query={graphql`
      query  ResearchPage  {
      contentfulResearchPage {
        slug
        content {
          childMarkdownRemark {
            html
          }
        }
        imageResearch {
                sizes(maxWidth: 1200) {
                  ...GatsbyContentfulSizes
                }  
                description   
        }
      }
    }
    
    `}
    render={  ({contentfulResearchPage})  =>
    <Layout>
      <SEO title="Research" keywords={[`alan tod`, `forest`, `art`, 'Research']} />
       <Container fluid  first>
       
              
         <div className={styles.container} >
          <Fade bottom distance="20px">
           <div 
            className={styles.content}
            dangerouslySetInnerHTML={{__html:contentfulResearchPage.content.childMarkdownRemark.html}}>
           </div>
          </Fade>
          <div className={styles.image}>
            <Fade top distance="20px">
            <Img sizes={contentfulResearchPage.imageResearch.sizes} />
            <span className={styles.caption}>{contentfulResearchPage.imageResearch.description}</span>
            </Fade>
          </div>
        </div>
      </Container>
  </Layout>
   }
  />
)


export default Research