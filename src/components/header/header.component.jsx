import React from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/4.2 crown.svg.svg';

import './header.styles.scss';

const header = () => {
	return (
		<header className='header'>
			<Link className='logo-container' to='/'>
				<Logo className='logo'/>
			</Link>
			<nav className='options'>
				<Link className='option' to='/signin'>Signin</Link>
				<Link className='option' to='/shop'>Shop</Link>
				<Link className='option' to='/'>Home</Link>
			</nav>
		</header>
	);
};

export default header;