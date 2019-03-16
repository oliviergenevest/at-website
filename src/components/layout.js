import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link/*, PageRenderer*/  } from 'gatsby'
import Navigation from './Navigation/Navigation'
import Container from './Container/Container'
import config from '../config/SiteConfig'

import 'typeface-didact-gothic'
import { FaInstagram, FaFacebook /*, FaTwitter*/ } from 'react-icons/fa'
import styles from './layout.module.scss'
import { IntlProvider, addLocaleData } from 'react-intl'

// Locale data
import enData from 'react-intl/locale-data/en'
import frData from 'react-intl/locale-data/fr'

// Messages

/*import en from '../i18n/en.json'
import fr from '../i18n/fr.json'

const messages = { en, fr }*/

addLocaleData([...enData, ...frData])

const Layout = ({ children, locale } ) => (
 
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

      <IntlProvider locale={locale} >
      <div className={styles.page}>   
 
        <Navigation/>locale : {locale}
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
       </IntlProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
