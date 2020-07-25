import React from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/4.2 crown.svg.svg';

import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';

const header = ({currentUser}) => {
	return (
		<header className='header'>
			<Link className='logo-container' to='/'>
				<Logo className='logo'/>
			</Link>
			<nav className='options'>
				<Link className='option' to='/'>Home</Link>
				<Link className='option' to='/shop'>Shop</Link>
				{
					currentUser ? 
					<div className='option' onClick={() => auth.signOut()}>Sign out</div> : 
					<Link className='option' to='/signin'>Sign in</Link>
				}				
			</nav>
		</header>
	);
};

export default header;