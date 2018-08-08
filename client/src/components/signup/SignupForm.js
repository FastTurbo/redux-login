import React, { Component } from 'react'
import classnames from 'classnames'

export class SignupForm extends Component {
    state = {
        username:'',
        email:'',
        password:'',
        passwordConfirmation:'',
        errors:{}
    }

    onChange = e => {
        this.setState({[e.target.name] : e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({ errors:{} })
        this.props.userSignupRequest(this.state)
        .then(() => {},
        ({response}) => { this.setState({ errors: response.data })})

        console.log(this.state)
    }
  render() {
      const { errors } = this.state 
    return (
      <form onSubmit={ this.handleSubmit }>
        <h1>Join our community</h1>
        <div className="form-group">
            <label className="control-label">Username</label>

            <input type="text"
                name="username"
                value={ this.state.username }
                onChange={ this.onChange }
                className={ classnames('form-control', { 'is-invalid' : !!errors.username })}
                />
                { errors.username && <span className="form-text text-muted">{ errors.username }</span>}
        </div>
        <div className="form-group">
            <label className="control-label">Email</label>

            <input type="email"
                name="email"
                value={ this.state.email }
                onChange={ this.onChange }
                className={ classnames('form-control', { 'is-invalid' : !!errors.email })}
                />
            { errors.email && <span className="form-text text-muted">{ errors.email }</span>}
        </div>
        <div className="form-group">
            <label className="control-label">Password</label>

            <input type="password"
                name="password"
                value={ this.state.password }
                onChange={ this.onChange }
                className={ classnames('form-control', { 'is-invalid' : !!errors.password })}
                />
             { errors.password && <span className="form-text text-muted">{ errors.password }</span>}
        </div>
        <div className="form-group">
            <label className="control-label">Password Confirmation</label>

            <input type="password"
                name="passwordConfirmation"
                value={ this.state.passwordConfirmation }
                onChange={ this.onChange }
                className={ classnames('form-control', { 'is-invalid' : !!errors.passwordConfirmation })}
                />
             { errors.passwordConfirmation && <span className="form-text text-muted">{ errors.passwordConfirmation }</span>}
        </div>
        <div className="form-group">
            <button className="btn btn-primary btn-lg">Sign Up</button>
        </div>
      </form>
    )
  }
}

export default SignupForm
