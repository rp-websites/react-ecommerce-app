import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import HomePage from './pages/HomePage/homepage.component';
import ShopPage from './pages/Shop/shop.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';
import { firestore } from 'firebase';

class App extends Component {
	constructor(){
		super();

		this.state = {
			currentUser: null
		}
	}

	unsubscribeFromAuth = null;

	componentDidMount(){
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if(userAuth){
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapshot => {
					this.setState({
						currentUser: {
							id: snapshot.id,
							...snapshot.data()
						}
					})
				})
			}
			this.setState({currentUser: userAuth})			
		})
		
	}
	
	componentWillUnmount(){
		this.unsubscribeFromAuth();
	}

	render(){
		return (
			<div>
				 <BrowserRouter>
					 <Header currentUser={this.state.currentUser}/>
					<Switch>
						<Route path='/signin' component={SignInSignUp}/>
						<Route path='/shop' component={ShopPage}/>
						<Route exact path='/' component={HomePage}/>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
