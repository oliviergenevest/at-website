import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import SEO from '../components/seo'
/*import styles from './about.module.scss'*/

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage1: file(relativePath: { eq: "forest-1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        placeholderImage2: file(relativePath: { eq: "paintings-forest.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <><Img fluid={data.placeholderImage1.childImageSharp.fluid} />
     <br/>
    <Img fluid={data.placeholderImage2.childImageSharp.fluid}
     />
      <br/>
     </>
   }
  />
)

const Research = () => (
  <Layout>
    <SEO title="Research" keywords={[`alan tod`, `forest`, `art`, 'Research']} />

 <Container fluid >
  <h1>Research</h1>
        <h3>
       FOREST ART, Total art, Land-art, Painting, Theory, Photography, Bio arte and Performance.</h3>
   <div style={{display:'flex'}} >
     <div style={{flexBasis:'35%'}} >
       
    <p>
    I look for the vibrations of reality and of perspective. My work is about optic.</p>
    <p>
    I am first and foremost an artist of the forest, and my sole ambition is to spread the song of the trees across the earth and make the forest a piece of art. From a theoretical point of view, I am a painter of the classical questions in art, and as such I serve nature, its beauty, and its love for humanity.</p>
    <p>
    "Planting forests, awaiting the eagles’ return" is the sound of the new economy and a new spirituality. A forest is a family, a new state of mind for human kind. The vibration between life and death, darkness and light, water and sun, soil and sky is making the green melody of a landscape painting.</p>
    <p>
    Forest is, in and of itself, a living, vibrationist artwork. It was proposed tangentially to the pictorial research into polyphony, and its aim is to propagate the growth of natural forest, with the help of humanity. As such, the project produces forests, stories, photographs, films, paintings, installations and performances.</p>
    <p>
    Adhering to the collaborative tradition of painting and related to the movement of Bio arte, the Forest questions accepted truths, and brings the spectator into this debate. As the heir of total art, this living piece can be seen as the ultimate work of love between nature and humanity.</p>
    <p>
    From a purely pictorial point of view, Forest is akin to Claude Monet’s undertakings in Giverny, where he planted his garden before painting it.As an objet d’art, Forest is a work of ‘inspired botany’; the continued transformation of the Sintra forest and the Park of Pena in Portugal, a botanical forest planted in the 19th Century by King Ferdinand II of Portugal, who was nicknamed the Artist King. Today Sintra forest is renowned for its positive environmental impact. Forest is a continuation of this same spirit.</p>
    <p>
    Using sincerity as a key for humility, I try to use constraint as a freedom or a chance.
    </p>
    <p>
    There is nothing to invent, only to discover. With others : http://www.cacaoeuropa.com http://www.lescahiers.eu/ http://www.artforlove.fr
    </p> 
    </div>

    <div style={{flexBasis:'65%', flexGrow:'1',marginLeft:'2rem'}}>
     <Image  />
    </div>
  </div>
</Container>
  </Layout>
)

export default Research