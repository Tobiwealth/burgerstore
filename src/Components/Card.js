import React,{useState,useEffect} from 'react';
import './CardList.css';

function Card({name,url}) {
	
	return(
		<>
		   <div className='card'>
		   	    <figure className='card-wrapper'>
		   	        <img src={url} alt='burgers'/>
		   	        <figcaption>{name}</figcaption>
		   	    </figure>
		   </div>
		</>
	);
}

export default Card;


