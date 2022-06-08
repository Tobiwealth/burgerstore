import React from 'react';
import './Footer.css';

const Footer = () => {
	return(
		<>
		    <div className='footer-container'>
		    	<section className='section'>
		    		<p>Subscribe to our Newsletter to receive health and nutrition tips</p>
		    		<p className="pad">You can unsubscribe at anytime</p>
		    		<div>
		    			<form>
		    				<input type='email' name='email' placeholder='Your Email' className='footer-input'/>
		    				<button className='button'>Subscribe</button>
		    			</form>
		    		</div>
		    	</section>
		    	<div >
		    	    <p className='contact'>Contact us at cookiesstore@gmail.com</p>
		    	    <div className='correct'>
		    	        <p className='adjust'>&copy;</p><h5>TobiWealth 2022</h5>
		    	    </div>
		    	</div>
		    	<div className='footer-icons'>
		    		<div className='footer-logo'>CKS <i className='fas fa-hamburger shift'></i></div>
		    		<div>
		    		    <ul>
			    			<li className='social-icon-link facebook'>
								<i className='fab fa-facebook-f'></i>
							</li>
							<li className='social-icon-link instagram'>
								<i className='fab fa-instagram'></i>
							</li>
							<li className='social-icon-link youtube'>
								<i className='fab fa-youtube'></i>
							</li>
							<li className='social-icon-link twitter'>
								<i className='fab fa-twitter'></i>
							</li>
							<li className='social-icon-link linkedin'>
								<i className='fab fa-linkedin'></i>
							</li>
						</ul>

		    		</div>
		    	</div>
		    </div>
		</>
	);
}

export default Footer;