import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fullname: '',
			email: '',
			password: '',
			confirmpassword : '',
			error : true,
			errorMessage : "Please provide fullname or email or password",
			successMessage : 'You have sucessfully registered'
		};

		this.update = this.update.bind(this);

		this.displayRegister = this.displayRegister.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	displayRegister(e) {
		e.preventDefault();
		this.setState({
			fullname: '',
			email: '',
			password: ''
		});
		if (
			(this.state.fullname === '' ||
			this.state.fullname === null ||
			this.state.fullname === undefined  ||  this.state.password === '' ||
			this.state.password === null ||
			this.state.password === undefined ||  this.state.email === '' ||
			this.state.email === null ||
			this.state.email === undefined) || (this.state.password !== this.state.confirmpassword)
		  ) {

			this.setState({
			  errorMessage: 'Please provide fullname or email or password',
			  error: true,
			  displayData : JSON.stringify("error :" + this.state.error + "  errorMessage:"  +this.state.errorMessage,undefined,2)
			})
		  } else {
			this.setState({
			  successMessage: 'You have sucessfully registered ',
			  displayData : JSON.stringify("thisFirstname:" + this.state.fullname + "successMessage:" +this.state.successMessage,undefined,2)
			})
		  }
	}

	render() {
		return (
			<div className="register">
				<form onSubmit={this.displayRegister}>
					<h2>Register</h2>

					<div className="name">
						<input
							type="text"
							placeholder="Full Name"
							name="fullname"
							value={this.state.fullname}
							onChange={this.update}
						/>
					</div>

					<div className="email">
						<input
							type="text"
							placeholder="Enter your email"
							name="email"
							value={this.state.email}
							onChange={this.update}
						/>
					</div>

					<div className="pasword">
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={this.state.password}
							onChange={this.update}
						/>
					</div>

					<div className="password">
						
						<input
							type="password"
							placeholder="Confirm Password"
							name="confirmpassword"
							value={this.state.confirmpassword}
							onChange={this.update}
						/>
					</div>

					<input type="submit" value="Login" />
				</form>

				<pre> {this.state.displayData}</pre>
				<Link to="/">Login Here</Link>
			</div>
		);
	}
}

export default Register;
