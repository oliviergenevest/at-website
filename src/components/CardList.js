import React from 'react'
import styles from './CardList.module.scss'


const CardList = props => {
  return <ul className={styles.list}>{props.children}</ul>
}

export default CardList