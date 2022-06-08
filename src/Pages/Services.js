import React from 'react';
import CardList from '../Components/CardList';
import Footer from '../Components/Footer';
import './Home.css';

const Services = () => {

	return(
		<>
		<div className='services'>
			<div className='card-con'>
			    <h2 className='align'>Burger List</h2>
				<div className='cl'>
				    <CardList index={15}/>
				</div>
			</div>
			<div className='foot'>
			    <Footer/>
			</div>
		</div>
		</>
	);
}

export default Services;