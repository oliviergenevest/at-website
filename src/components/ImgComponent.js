import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ImgComponent = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 1600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}

    render={(data) => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) { return null; }
      
      const imageSizes = image.node.childImageSharp.sizes;
      return (
        <Img
          alt={props.alt}
          sizes={imageSizes}
        />
      );
    }}
  />
)

export default ImgComponent