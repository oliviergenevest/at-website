import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link, PageRenderer  } from 'gatsby'
import Navigation from './Navigation/Navigation'
import Container from './Container/Container'
import 'typeface-muli'
import "typeface-didact-gothic"

import styles from './layout.module.scss'
/*import AudioPlayer from '../components/Player/player'*/



const Layout = ({ children }) => (
  
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
              <span>© Alan Tod - 2019</span>
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