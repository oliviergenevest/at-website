import React from 'react'
import { /*Link,*/ StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import SEO from '../components/seo'
import { Fade } from "react-reveal"
import styles from './reasearch.module.scss'

export default ({pageContext, data}) => {
    return (
       <Layout locale={pageContext.locale}>
        <SEO title="Research" keywords={[`alan tod`, `forest`, `art`, 'Research']} />  
        <div className={styles.container} >   
          <Fade bottom distance="20px">
             <div 
              className={styles.content}
              dangerouslySetInnerHTML={{__html:data.contentfulResearchPage.content.childMarkdownRemark.html}}>
             </div>
          </Fade>
        <div className={styles.image}>
          <Fade top distance="20px">
            <Img fluid={data.contentfulResearchPage.imageResearch.fluid} alt={data.contentfulResearchPage.imageResearch.description}/>
            <span className={styles.caption}>{data.contentfulResearchPage.imageResearch.description}</span>
          </Fade>
          </div>
        </div>     
      </Layout> 
  )
}

export const pageQuery = graphql`
    query  ResearchPage ($locale: String!) {
      contentfulResearchPage (node_locale: {eq: $locale }) {
        slug
        content {
          childMarkdownRemark {
            html
          }
        }
        imageResearch {
                fluid(maxWidth: 1200) {
                  ...GatsbyContentfulFluid_withWebp
                }  
                description   
        }
      }
    }
`