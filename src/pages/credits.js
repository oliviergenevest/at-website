import React from 'react'
/*import { Link } from 'gatsby'*/
import { StaticQuery, graphql  } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import SEO from '../components/seo'

	
const Credits = ({pageContext}) => (
  <StaticQuery
    query={graphql`
      query  CreditPage  {
      allContentfulCredits(
		filter: {node_locale: {regex: "/fr/"}}
      ) {
	    edges {
	      node {
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
	  }
    }
  `}

    render={({allContentfulCredits}) => (
    
              <Layout locale={pageContext.locale}>
                <SEO title={allContentfulCredits.edges[0].node.slug} keywords={[`alan tod`, `forest`, `art`]} />
               
             
              <Container text first>
             <p>Langue : {pageContext.locale}</p>
             <div dangerouslySetInnerHTML={{__html:allContentfulCredits.edges[0].node.content.childContentfulRichText.html}}></div>
                
                 

			{	
			 allContentfulCredits.edges[0].node.illustrations.map( (video , index) => (
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
/>


)

export default Credits
