import React, { Component } from 'react'
import classnames from 'classnames'
import validateInput from '../../utils/validations/login';

export class LoginForm extends Component {
    state = {
        identifier: '',
        password:'',
        errors:{},
        isLoading:false
    }

    onChange = e => {
        this.setState({ [e.target.name] : e.target.value })
    }

    isValid = () => {
        const { errors, isValid } = validateInput(this.state)

        if(!isValid){
            this.setState({ errors})
        }
        return isValid
    }

    handleSubmit = e => {
        e.preventDefault()
        if(this.isValid()){

        }
    }
  render() {
      const { errors, identifier, password, isLoading } = this.state
    return (
      <form onSubmit={ this.handleSubmit }>
        <h1>Login</h1>
        <div className="form-group">
            <label className="control-label">Username / Email </label>

            <input type="text"
                name="identifier"
                value={ identifier }
                onChange={ this.onChange }
                className={ classnames('form-control', { 'is-invalid' : !!errors.identifier })}
                />
                { errors.identifier && <span className="form-text text-muted">{ errors.identifier }</span>}
        </div>
        
        <div className="form-group">
            <label className="control-label">Password</label>

            <input type="password"
                name="password"
                value={ password }
                onChange={ this.onChange }
                className={ classnames('form-control', { 'is-invalid' : !!errors.password })}
                />
             { errors.password && <span className="form-text text-muted">{ errors.password }</span>}
        </div>
        <div className="form-group">
            <button disabled={ this.state.isLoading || this.state.invalid } className="btn btn-primary btn-lg">Sign In</button>
        </div>
      </form>
    )
  }
}

export default LoginForm
