import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';


const HeroSection = () => {
	return(
		<div className='hero-con'>
		    <div className='con'>
				<h2>WELCOME TO</h2>
				<h1>COOKIES STORE</h1>
				<Link to='/order' className='btn-link'>
					<button className='btns' link='/order'>
						ORDER NOW
					</button>
				</Link>
			</div>
		</div>
	);
}

export default HeroSection;