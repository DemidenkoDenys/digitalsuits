import React, { Component } from 'react';
import validator from 'validator';

import './form.scss';

export default class SignUpForm extends Component {

	state = {
		fname: '',
		lname: '',
		email: '',
		
    	fnameValid: false,
    	lnameValid: false,
    	emailValid: false,

    	formValid: false
	}

	handleUserInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		this.setState({ [name]: value },
						() => { this.validateField(name, value) });
	}

	validateField(fieldName, value) {
		
		let fnameValid = this.state.fnameValid,
			lnameValid = this.state.lnameValid,
			emailValid = this.state.emailValid;
		

		switch(fieldName) {
			case 'fname':
				fnameValid = value.length >= 6 && /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/.test(value);
				break;
			case 'lname':
				lnameValid = value.length >= 6 && /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/.test(value);
				break;
			case 'email':
				emailValid = validator.isEmail(value);
				break;
			default:
				break;
		}
		
		this.setState({ fnameValid: fnameValid,
						lnameValid: lnameValid,
						emailValid: emailValid
					  }, this.validateForm);
	}

	validateForm() {
		this.setState({
			formValid:  this.state.fnameValid && 
						this.state.lnameValid &&
						this.state.emailValid });
	}

	errorClass(valid){
		return ( valid ? 'valid' : 'unvalid')
	}

	handleSubmitForm = (e) => {
		if(!this.state.formValid)
			e.preventDefault();
	}

	render() {

		return( 
			<form className='sign-up-form' onSubmit={ this.handleSubmitForm }>
				<div className='inputs-wrapper'>
					<label>
						<input name='fname' 
							   type='text' 
							   value={ this.state.fname } 
							   onChange={ this.handleUserInput }
							   className={ this.errorClass(this.state.fnameValid) }
							   minLength='6'
							   required />
						<span>First name</span>
					</label>

					<label>
						<input name='lname' 
							   type='text' 
							   value={ this.state.lname }
							   onChange={ this.handleUserInput }
							   className={ this.errorClass(this.state.lnameValid) }
							   minLength='6'
							   required />
						<span>Last name</span>
					</label>

					<label>
						<input name='email' 
							   type='email' 
							   value={ this.state.email }
							   onChange={ this.handleUserInput }
							   className={ this.errorClass(this.state.emailValid) }
							   required />
						<span>Email</span>
					</label>
				</div>

				<div className='button-wrapper'>
					<button className='button' type='submit' disabled={ !this.state.formValid }>Send request</button>
				</div>
			</form>
		)
	}
}