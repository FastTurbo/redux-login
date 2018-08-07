import React, { Component } from 'react'

export class SignupForm extends Component {
    state = {
        username:'',
        email:'',
        password:'',
        passwordConfirmation:''
    }

    onChange = e => {
        this.setState({[e.target.name] : e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.userSignupRequest(this.state)

        console.log(this.state)
    }
  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <h1>Join our community</h1>
        <div className="form-group">
            <label className="control-label">Username</label>

            <input type="text"
                className="form-control"
                name="username"
                value={ this.state.username }
                onChange={ this.onChange }
                />
        </div>
        <div className="form-group">
            <label className="control-label">Email</label>

            <input type="email"
                className="form-control"
                name="email"
                value={ this.state.email }
                onChange={ this.onChange }
                />
        </div>
        <div className="form-group">
            <label className="control-label">Password</label>

            <input type="password"
                className="form-control"
                name="password"
                value={ this.state.password }
                onChange={ this.onChange }
                />
        </div>
        <div className="form-group">
            <label className="control-label">Password Confirmation</label>

            <input type="password"
                className="form-control"
                name="passwordConfirmation"
                value={ this.state.passwordConfirmation }
                onChange={ this.onChange }
                />
        </div>
        <div className="form-group">
            <button className="btn btn-primary btn-lg">Sign Up</button>
        </div>
      </form>
    )
  }
}

export default SignupForm
