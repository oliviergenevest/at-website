import React from 'react'
import styles from './ContactForm.module.scss'
const ContactForm = () => 
(
	<>
		<h2 id="contact">Contact</h2>
		<form name="contact" action="/success" method="post"  data-netlify="true" data-netlify-honeypot="bot-field">
		   
		    <div  className={styles.column}>
		     	<input type="hidden" name="bot-field" />
		    	<input type="hidden" name="form-name" value="contact" />
			   
			        <label htmlFor="name">Name</label>
			        <input placeholder="Your Name" name="name" id="name" required />
			      
			    
			   
			        <label htmlFor="email">Email</label>
			        <input placeholder="Your Email Address"  type="text" name="email" id="email" required  />
			  
			</div>
		    <div className={styles.column}>
			    
			        <label htmlFor="message">Message</label>
			        <textarea name="message" id="message" rows="6" required ></textarea>
			  
			    <div className="actions">
			        <input type="submit" value="Send Message" className="special" />
			      
			    </div>
			</div>
		</form>
	</>
)

export default ContactForm