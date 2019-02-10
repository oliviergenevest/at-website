import React from 'react'
/*import { Link } from 'gatsby'*/
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import SEO from '../components/seo'
/*import styles from './biography.module.scss'*/
const Credits = () => (
  <Layout>
    <SEO title="Credits" keywords={[`gatsby`, `application`, `react`]} />

 <Container text>
    
    <h1>Credits</h1>
    
    <h2>Website</h2>
    <p><a href="https://oliviergenevest.info">Olivier Genevest</a></p>
    
    <h2>Photos</h2>
    <p><a href="https://crespeauphoto.fr">Cyril Crespeau</a></p>

</Container>
  </Layout>
)

export default Credits
