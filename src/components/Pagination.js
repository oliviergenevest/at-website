import React from 'react'
import { Link } from 'gatsby'
import styles from './Pagination.module.scss'

class Pagination extends React.Component {
  render() {
    const { numPages, currentPage, slug } = this.props.context
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const isNotPaginated = isFirst & isLast

    const prevPageNum = currentPage - 1 === 1 ? `` : currentPage - 1
    const nextPageNum = currentPage + 1

    const pathPrefix = typeof slug === 'string' ? `/tag/${slug}` : '/news/'
    const prevPageLink = isFirst ? null : `${pathPrefix}/${prevPageNum}/`
    const nextPageLink = isLast ? null : `${pathPrefix}/${nextPageNum}/`

    return (
      <div className={styles.wrapper}>
        {!isFirst && (
          <Link to={prevPageLink} className={styles.previousLink}>&#8592; Prev Page</Link>
        )}
        {!isNotPaginated && (
          <span className={styles.pageIndicator}>
            {currentPage}/{numPages}
          </span>
        )}
        {!isLast && <Link to={nextPageLink} className={styles.nextLink}>Next Page &#8594;</Link>}
      </div>
    )
  }
}

export default Pagination