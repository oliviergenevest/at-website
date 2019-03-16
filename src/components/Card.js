import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Fade } from "react-reveal"
/*import Container from './Container/Container'*/
import styles from './Card.module.scss';
import LocalizedLink from './LocalizedLink/LocalizedLink'

const Card = ({ slug, heroImage, title, updatedAt, description, locale, ...props }) => {
  return (
    <Fade bottom distance="20px">
    <li /*featured={props.featured} */ className={styles.post}>
      <LocalizedLink to={`/project/${slug}/`}>
        <Img fluid={heroImage.fluid} backgroundColor={'#eeeeee'} className={styles.postImage}/>
        
          <h2  className={styles.title}>{title}</h2>
        <div className = {styles.excerpt}>
      
        <p
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.excerpt,
          }}
        ></p>
        </div>
      
      </LocalizedLink>
    </li>
    </Fade>
  )
}

export default Card