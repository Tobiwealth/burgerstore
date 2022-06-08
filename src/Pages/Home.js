import React from 'react';
import HeroSection from '../Components/HeroSection';
import CardList from '../Components/CardList';
import Footer from '../Components/Footer';
import './Home.css';

function Home () {
	return(
		<div>
			<HeroSection/>
			<h3>Our popular Burgers</h3>
			<CardList index={9}/>
			<Footer/>
		</div>
	);
}

export default Home;