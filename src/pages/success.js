import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Container from '../components/Container/Container'


const Success = (props) => (
    <Layout>
        <Helmet>
            <title>Success Page</title>
            <meta name="description" content="Success Page" />
        </Helmet>

        <Container text>
            
            <h1>Success</h1>
            <p>Thank you for contacting me!</p>
       
          
        </Container>
    </Layout>
)

export default Success