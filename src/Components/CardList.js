import React from 'react';
import Card from './Card';
import {burgers} from './burgers';
import './CardList.css';

function CardList({index}) {
	const burgercomponent = burgers.map((item,i) => {
		if(i < index){
    		return(
    			<Card key={i} name={burgers[i].name} url={burgers[i].url} />
    		);
	    }
	})
	return(
		<>
			<div>
			    <div className='container'>
				    {burgercomponent}
			    </div>
			</div>
		</>
	);
}

export default CardList;