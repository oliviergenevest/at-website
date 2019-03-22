import React from 'react'
import styles from './ContactForm.module.scss'
import { FormattedMessage } from 'react-intl'
const ContactForm = () => 
(
	<>
		<h2 id="contact">Contact</h2>
		<form name="contact" action="/success" method="post"  data-netlify="true" data-netlify-honeypot="bot-field">
		   
		    <div  className={styles.column}>
		     	<input type="hidden" name="bot-field" />
		    	<input type="hidden" name="form-name" value="contact" />
			   
			        <label htmlFor="name"> <FormattedMessage id="name" /></label>
		        	<FormattedMessage id="placeholder_name">
            			 {placeholder => (
			                <input placeholder={placeholder} type="text" name="name" id="name" required  />
			            ) }
		            </FormattedMessage>
			        
			        <label htmlFor="email"><FormattedMessage id="email" /></label>
			        <FormattedMessage id="placeholder_email">
            			{placeholder => (
			                <input placeholder={placeholder} type="text" name="email" id="email" required  />
			            ) }
			         </FormattedMessage>
			
			</div>
		    <div className={styles.column}>
			    
			        <label htmlFor="message">Message</label>
			        <textarea name="message" id="message" rows="6" required ></textarea>
			  
			    <div className="actions">
			    <FormattedMessage id="send">
			    { value => (<input type="submit" value={value} className="special" />)
			        
			    }
			    </FormattedMessage>  
			    </div>
			</div>
		</form>
	</>
)

export default ContactForm