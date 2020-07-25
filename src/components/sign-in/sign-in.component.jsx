import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component{
	constructor(props){
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}
	
	handleSubmit = async e => {
		e.preventDefault();

		const {email, password} = this.state;

		try{ 
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({
				email: '',
				password: ''
			});
		 } catch(error){console.log(error)}
	}

	handleChange = (e) => {
		const {name, value} = e.target;
		this.setState({
			[name] : value
		})
	}

	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit} >
					<FormInput label='Email' name='email' type='email' onChange={this.handleChange} value={this.state.email}/>
					<FormInput label='Password' name='password' type='password' onChange={this.handleChange} value={this.state.password}/>
					<div className='buttons'>
						<CustomButton type='submit'>
							Sign In
						</CustomButton>
						<CustomButton isGoogleButton onClick={signInWithGoogle}>
							Sign in with Google
						</CustomButton>
					</div>					
				</form>
			</div>
		);
	}
};

export default SignIn;