import React from 'react'
import { Link } from 'gatsby'
import styles from './PostLinks.module.scss'


const PostLinks = props => {
  return (
    <div className={styles.wrapper}>
      <div  className={styles.box}>
        {props.previous && (
          <Link to={`/project/${props.previous.slug}/`}  className={styles.previousLink}>
            &#8592; Previous project
          </Link>
        )}
        {props.next && (
          <Link to={`/project/${props.next.slug}/`}  className={styles.nextLink}>Next project &#8594;</Link>
        )}
      </div>
    </div>
  )
}

export default PostLinks