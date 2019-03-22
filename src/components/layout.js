import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link/*, PageRenderer*/  } from 'gatsby'
import Navigation from './Navigation/Navigation'
import { Location } from '@reach/router';
import Container from './Container/Container'
import config from '../config/SiteConfig'
import 'typeface-didact-gothic'
import { FaInstagram, FaFacebook  } from 'react-icons/fa'
import styles from './layout.module.scss'
import { IntlProvider, addLocaleData } from 'react-intl'
import LocalizedLink from '../components/LocalizedLink/LocalizedLink'
// Locale data
import enData from 'react-intl/locale-data/en'
import frData from 'react-intl/locale-data/fr'
import { FormattedMessage } from 'react-intl'
// Messages

import en from '../i18n/en.json'
import fr from '../i18n/fr.json'

const messages = { en, fr }

addLocaleData([...enData, ...frData])

const Layout = ({ children, locale, location } ) => (
 
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

      <IntlProvider locale={locale}  messages={messages[locale]} >
      <div className={styles.page}>   
 
        <Navigation />
        <main className={styles.content} >
          {children} 
      
        </main>      
         <footer>
           <Container fluid footer >
              
              <span>
                <Location>
                {({ location }) => {
                  const newLocationFR = (location.pathname.substring(0,4) === "/fr/") ? location.pathname : '/fr/'+location.pathname.substring(1) 
                  const newLocationEN =  (location.pathname.substring(0,4) === "/fr/") ? location.pathname.substring(3) : location.pathname 
                return(  <>
                  <Link to={newLocationFR}  activeClassName="active">FR</Link>  
                  <Link to={newLocationEN} activeClassName="active" 
                  style={{'marginLeft': '10px'}}
                  >EN</Link>
                  </>
                  )
                }}
                 </Location>
              </span>
              <span>  <a href={config.instagramPageUrl} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              
                <a href={config.facebookPageUrl} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a> <span>© Alan Tod - 2019 -  <LocalizedLink to="/credits"> <FormattedMessage id="credits" /></LocalizedLink>  </span>
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
