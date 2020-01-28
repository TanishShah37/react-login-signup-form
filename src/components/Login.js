import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      firstname: '',
      password: '',
      error: true,
      errorMessage: 'Please provide firstname or password',
      successMessage: 'You are being logged in'
    }

    this.update = this.update.bind(this)

    this.displayLogin = this.displayLogin.bind(this)
  }

  update (e) {
    let name = e.target.name
    let value = e.target.value
    this.setState({
      [name]: value
    })
  }

  displayLogin (e) {
    e.preventDefault()
    if (
      this.state.firstname === '' ||
      this.state.firstname === null ||
      this.state.firstname === undefined  ||  this.state.password === '' ||
      this.state.password === null ||
      this.state.password === undefined
    ) {
      this.setState({
        errorMessage: '',
        error: true,
        displayData : JSON.stringify("error :" + this.state.error + "  errorMessage:"  +this.state.errorMessage,undefined,2)
      })
    } else {
      this.setState({
		displayData : JSON.stringify("thisFirstname:" + this.state.firstname + "successMessage:" +this.state.successMessage,undefined,2)
	  })

	  
	
    }
  }

  render () {
    return (
      <div className='login'>
        <form onSubmit={this.displayLogin}>
          <h2> Login </h2>{' '}
          <div className='username'>
            <input
              type='text'
              placeholder='Enter FirstName'
              value={this.state.firstname}
              onChange={this.update}
              name='firstname'
            />
          </div>
          <div className='password'>
            <input
              type='password'
              placeholder='Enter Password'
              value={this.state.password}
              onChange={this.update}
              name='password'
            />
          </div>
          <input type='submit' value='Login' />
        </form>
        <Link to='/register'> Sign Up </Link>{' '}
        <pre> {this.state.displayData} </pre>
      </div>
    )
  }
}

export default Login
