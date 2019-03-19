import React from 'react'
import Img from 'gatsby-image'
import config from '../config/SiteConfig'
import 'typeface-didact-gothic'
import { StaticQuery, graphql } from 'gatsby'
import SEO from '../components/seo'
import Grid1 from '../components/Grid/Grid1'
 
// languages
import { IntlProvider, addLocaleData } from 'react-intl'
// Locale data
import enData from 'react-intl/locale-data/en'
import frData from 'react-intl/locale-data/fr'     

addLocaleData([...enData, ...frData])

const IndexPage = ({ pageContext } ) => (
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
       <IntlProvider locale={pageContext.locale} >
          <>
            <SEO title={contentfulHomepage.subtitle} keywords={[`Alan Tod`, `forest`, `artist`, `art`]} />
            <Grid1 
              image = { <Img fluid={contentfulHomepage.backgroundImage.fluid} /> } 
              heroText = {{text:contentfulHomepage.title}} 
              text1= {{text:contentfulHomepage.subtitle}} 
              text3= {{text:'Website under construction'}} 
            /> 
          </>  
      </IntlProvider>
     )}
  />
);




export default IndexPage