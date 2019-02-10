import React from 'react'
/*import { Link } from 'gatsby'
import Img from 'gatsby-image'*/
import { Slug, Fade } from 'mauerwerk'
import styles from './Grid2.module.scss'

/* 
A faire :
Faire fonctionner le composant gatsby-image en mode cover au lieu d'utiliser l'image de fond dans le css

*/

const Grid2 = ({image, text, link}) => (
   	
      <div className= {styles.gridContainer} >
   

	       <div className= {styles.text} >
	       <Slug >  <p>{ text.text } {link}</p></Slug>
	       </div>

	       <div className= {styles.image} > 
	      {image}
	       </div>

      </div>
  
)

export default Grid2