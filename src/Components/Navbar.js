import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
	const [click,setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click); 
	const closeMobile = () => setClick(false)

	const showButton = () => {
		if(window.innerWidth <= 960) {
			setButton(false);
		} else{
			setButton(true);
		}
	};

	useEffect(() => {
        showButton();
	},[]);

	window.addEventListener('resize', showButton);

	return(
		<nav className= 'navbar'>
			<div className= 'nav-container'>
			    <Link to='/' className='logo' onClick={closeMobile}>
					CKS <i className='fas fa-hamburger'></i> 
				</Link>
				<div className="menu-icon" onClick={handleClick}>
					<i className= {click? "fa fa-times" : "fa fa-bars"}></i>
				</div>
				<ul className= {click? "nav-menu active" : "nav-menu"}>
					<li className='nav-item'>
						<Link to='/' className='nav-link' onClick={closeMobile}>HOME</Link>
					</li>
					<li className='nav-item'>
						<Link to='/services' className='nav-link' onClick={closeMobile}>BURGERS</Link>
					</li>
					<li className='nav-item'>
						<Link to='/about' className='nav-link' onClick={closeMobile}>ABOUT</Link>
					</li>
		            <li className='nav-item'>
						<Link to='/sign-up' className='nav-link-mobile' onClick={closeMobile}>SIGN UP</Link>
					</li>
				</ul>
				<Link to='/sign-up'>
					{button && <Button>SIGN UP</Button>}
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;