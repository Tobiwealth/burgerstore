import React from 'react';
import './Button.css';


const Button = ({children}) => {


	return(
		<button type='button'>
			{children}
		</button>
	);
}

export default Button;