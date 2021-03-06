import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends Component{
	constructor(){
		super();

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}
	
	handleSubmit = async (e) => {
		e.preventDefault();
		const {displayName, email, password, confirmPassword} = this.state;
		if(password !== confirmPassword){
			alert('Passwords don\'t match!');
			return;
		}

		try{
			const {user} = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, {displayName});
			this.setState({
				displayName : '', 
				email: '', 
				password: '', 
				confirmPassword: ''});

		} catch(error){console.log(error)}
	}

	handleChange = (e) => {
		const {name, value} = e.target;
		this.setState({
			[name] : value
		})
	}

	render() {
		const {displayName, email, password, confirmPassword} = this.state;
		return (
			<div className='sign-up'>
				<h2>I do not have an account</h2>
				<span>Sign up with your email and password</span>
				<form className='sign-up-form' onSubmit={this.handleSubmit} >
					<FormInput label='Name' name='displayName' type='text' onChange={this.handleChange} value={displayName}/>
					<FormInput label='Email' name='email' type='email' onChange={this.handleChange} value={email}/>
					<FormInput label='Password' name='password' type='password' onChange={this.handleChange} value={password}/>
					<FormInput label='Confirm Password' name='confirmPassword' type='password' onChange={this.handleChange} value={confirmPassword}/>
					<div className='buttons'>
						<CustomButton type='submit'>
							Sign Up
						</CustomButton>
					</div>					
				</form>
			</div>
		);
	}
};

export default SignUp;