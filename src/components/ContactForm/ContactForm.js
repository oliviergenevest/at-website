import React from 'react'
const ContactForm = () => 
(
	<>
		<h2>Contact</h2>
		<form name="contact" method="post"  data-netlify="true" data-netlify-honeypot="bot-field">
		    <input type="hidden" name="bot-field" />
		    <div className="field half first">
		        <label htmlFor="name">Name</label>
		        <input type="text" name="name" id="name" />
		    </div>
		    <div className="field half">
		        <label htmlFor="email">Email</label>
		        <input type="text" name="email" id="email" />
		    </div>
		    <div className="field">
		        <label htmlFor="message">Message</label>
		        <textarea name="message" id="message" rows="6"></textarea>
		    </div>
		    <ul className="actions">
		        <li><input type="submit" value="Send Message" className="special" /></li>
		      
		    </ul>
		</form>
		</>
)

export default ContactForm