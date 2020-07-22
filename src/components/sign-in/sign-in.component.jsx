import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';

import './sign-in.styles.scss';

class SignIn extends Component{
	constructor(){
		super();

		this.state = {
			email: '',
			password: ''
		}
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
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
					<FormInput label='Email' name='email' type='email' required onChange={this.handleChange} value={this.state.email}/>
					<FormInput label='Password' name='password' type='password' required onChange={this.handleChange} value={this.state.password}/>
					<CustomButton type='submit'>
						<span>Sign In</span>
					</CustomButton>
				</form>
			</div>
		);
	}
};

export default SignIn;