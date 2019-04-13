import React from 'react'
import { Fade } from "react-reveal"
import styles from './Grid1.module.scss'
import {Link} from 'gatsby'

/* <p className= {styles.inProgress}> [ <Link to="/research">{text3.text}</Link> ] </p>*/

const Grid1 = ({image, text1, heroText, text3}) => (
   
      <div className= {styles.gridContainer} >
	        <div className= {styles.image} > 
	        	{image} 
	        </div>
	       <div className = {styles.inner} >
		       <div className= {styles.hero}>
		         <Fade bottom delay={500} distance="20px">
		          <h1 className= {styles.title}>{ heroText.text }</h1>
		         </Fade>
		       </div>

		       <div className= {styles.subTitle} >
		          <Fade bottom  delay={1000} distance="20px">
		         <h2>{ text1.text }</h2>
		           </Fade>
		       </div>
		       <Fade bottom  delay={1500} distance="20px">
		      <p className= {styles.inProgress}><Link to="/research">EN</Link> - <Link to="/fr/research">FR</Link></p>
		       </Fade>

			</div>
	       

      </div>
 
)

export default Grid1