import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link/*, PageRenderer*/  } from 'gatsby'
import Navigation from './Navigation/Navigation'
import Container from './Container/Container'
import config from '../config/SiteConfig'
/*import 'typeface-muli'*/
import 'typeface-didact-gothic'
import { FaInstagram, FaFacebook /*, FaTwitter*/ } from 'react-icons/fa'
import styles from './layout.module.scss'
/*import AudioPlayer from '../components/Player/player'*/



const Layout = ({ children } ) => (
  
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={
    
    
    
      data => (
      <div className={styles.page}>   

        <Navigation/>
        <main className={styles.content} >
          {children} 
        </main>      
         <footer>
           <Container fluid footer >
              <span><Link to="/credits">Credits</Link></span>
              <span>  <a href={config.instagramPageUrl} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              
                <a href={config.facebookPageUrl} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a> <span>© Alan Tod - 2019</span>
              </span>    
            </Container>
          </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
