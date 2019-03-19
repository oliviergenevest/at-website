import React from 'react'
import styles from './PostLinks.module.scss'
import LocalizedLink from './LocalizedLink/LocalizedLink'

const PostLinks = props => {

  return (
    <div className={styles.wrapper}>
      <div  className={styles.box}>
        {props.previous && (
          <LocalizedLink to={`/project/${props.previous.slug}/`}  className={styles.previousLink}  rel="prev">
            &#8592; Previous project 
            <span className={styles.navProjectName}>{props.previous.title}</span>
          </LocalizedLink>
        )}
        {props.next && (
          <LocalizedLink to={`/project/${props.next.slug}/`}  className={styles.nextLink} rel="next">Next project &#8594;
           <span className={styles.navProjectName}>{props.next.title}</span>
          </LocalizedLink>
        )}
      </div>
    </div>
  )
}

export default PostLinks