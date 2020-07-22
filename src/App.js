import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/header/header.component.jsx';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component.jsx';
import HomePage from './pages/HomePage/homepage.component.jsx';
import ShopPage from './pages/Shop/shop.component.jsx';

import './App.css';

function App() {
	return (
		<div>
 			<BrowserRouter>
			 	<Header />
				<Switch>
					<Route path='/signin' component={SignInSignUp}/>
					<Route path='/shop' component={ShopPage}/>
					<Route exact path='/' component={HomePage}/>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
