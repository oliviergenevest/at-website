import React from 'react'
import { Link } from 'gatsby'
import styles from './PostLinks.module.scss'


const PostLinks = props => {
  console.log(props.previous)
  return (
    <div className={styles.wrapper}>
      <div  className={styles.box}>
        {props.previous && (
          <Link to={`/project/${props.previous.slug}/`}  className={styles.previousLink}>
            &#8592; Previous project 
            <span className={styles.navProjectName}>{props.previous.title}</span>
          </Link>
        )}
        {props.next && (
          <Link to={`/project/${props.next.slug}/`}  className={styles.nextLink}>Next project &#8594;
           <span className={styles.navProjectName}>{props.next.title}</span>
          </Link>
        )}
      </div>
    </div>
  )
}

export default PostLinks