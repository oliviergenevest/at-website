import React from 'react'
/*import { Link } from 'gatsby'*/
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import SEO from '../components/seo'
	
const Credits = () => (
  <Layout>
    <SEO title="Credits" keywords={[`gatsby`, `application`, `react`]} />

 <Container text first>
    
    <h1>Credits</h1>
    
    <h2>Website</h2>
    <p><a href="https://oliviergenevest.info">Olivier Genevest</a></p>
    
    <h2>Illustrations</h2>
    <p><a href="https://alantod.com">Alan Tod</a></p>

</Container>
  </Layout>
)

export default Credits
