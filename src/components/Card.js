import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
/*import Container from './Container/Container'*/
import styles from './Card.module.scss';

const Card = ({ slug, heroImage, title, updatedAt, description, ...props }) => {
  return (
    <li /*featured={props.featured} */ className={styles.post}>
      <Link to={`/project/${slug}/`}>
        <Img fluid={heroImage.fluid} backgroundColor={'#eeeeee'} className={styles.postImage}/>
        
          <h2  className={styles.title}>{title}</h2>
        <div className = {styles.excerpt}>
      
        <p
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.excerpt,
          }}
        ></p>
        </div>
      
      </Link>
    </li>
  )
}

export default Card