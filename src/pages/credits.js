import React from 'react'
/*import { Link } from 'gatsby'*/
import { /*StaticQuery,*/ graphql  } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import SEO from '../components/seo'

	 
export default ({pageContext, data}) => {

  

    return  (
    
              <Layout locale={pageContext.locale}>
                <SEO title={data.contentfulCredits.slug} keywords={[`alan tod`, `forest`, `art`]} />
               
             
              <Container text first>
             <p>Langue : {pageContext.locale}</p>
             <div dangerouslySetInnerHTML={{__html:data.contentfulCredits.content.childContentfulRichText.html}}></div>
                
                 

			{	
			 data.contentfulCredits.illustrations.map( (video , index) => (
			             <div key={index}>
			             <Img  fluid={video.fluid}/>
			             <figcaption>{video.description}</figcaption>
			             </div>
			      )
			 )
         	} 

            </Container>

            
           
            
              </Layout>
            )
  }






export const pageQuery = graphql`
  query  CreditPage($locale: String!)  {
      contentfulCredits(node_locale: {eq: $locale }) {
        slug
	    content {
	        childContentfulRichText {
	          html
	        }
	    }
	    illustrations  {
	        fluid(maxWidth: 1800) {
	          ...GatsbyContentfulFluid_withWebp
	        }
	        description
	    }  
	  }
    }
`
