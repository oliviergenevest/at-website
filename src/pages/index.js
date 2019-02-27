import React from 'react'
/*import { Link } from 'gatsby'*/
import Img from 'gatsby-image'
/*import Layout from '../components/layout'*/
import 'typeface-muli'
import "typeface-didact-gothic"
import { StaticQuery, graphql } from 'gatsby'
import SEO from '../components/seo'
import Grid1 from '../components/Grid/Grid1'
     

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query  IndexPage  {
  contentfulHomepage {
    title
    subtitle
    backgroundImage {
     
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp
            }
          
    }
  }
}

    `}

    render={({contentfulHomepage}) => (
      <>
          <SEO title={contentfulHomepage.subtitle} keywords={[`Alan Tod`, `forest`, `artist`, `art`]} />
          <Grid1 
            image = { <Img fluid={contentfulHomepage.backgroundImage.fluid} /> } 
            heroText = {{text:contentfulHomepage.title}} 
            text1= {{text:contentfulHomepage.subtitle}} 
            text3= {{text:'Website under construction'}} 
          />   
      </>
     )}
  />
);




export default IndexPage