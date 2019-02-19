import React from 'react'

const ContactForm = () => 
(
	<>
		<h2>Contact</h2>
		<form name="contact" action="/success" method="post"  data-netlify="true" data-netlify-honeypot="bot-field">
		    <input type="hidden" name="bot-field" />
		    <input type="hidden" name="form-name" value="contact" />
		    <div className="field half first">
		        <label htmlFor="name">Name</label>
		        <input placeholder="Your Name" name="name" id="name" required />
		      
		    </div>
		    <div className="field half">
		        <label htmlFor="email">Email</label>
		        <input placeholder="Your Email Address"  type="text" name="email" id="email" required  />
		    </div>
		    <div className="field">
		        <label htmlFor="message">Message</label>
		        <textarea name="message" id="message" rows="6" required ></textarea>
		    </div>
		    <ul className="actions">
		        <li><input type="submit" value="Send Message" className="special" /></li>
		      
		    </ul>
		</form>
	</>
)

export default ContactForm