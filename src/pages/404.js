import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Page introuvable" />
    <h1>Page introuvable</h1>
    <p>L'adresse demandée n'existe pas. </p>
    <Link to='/'>Retour à l'accueil</Link>
  </Layout>
)

export default NotFoundPage
