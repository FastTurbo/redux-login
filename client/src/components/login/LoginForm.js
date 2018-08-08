import React, { Component } from 'react'
import classnames from 'classnames'
import validateInput from '../../utils/validations/login';
import { connect } from 'react-redux'
import { login } from '../../actions/loginAction'
import PropTypes from 'prop-types'

export class LoginForm extends Component {
    state = {
        identifier: '',
        password:'',
        errors:{},
        isLoading:false
    }

    static contextTypes = {
        router:PropTypes.object,
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
            this.setState({ errors:{}, isLoading:false})
            this.props.login(this.state)
            .then(
                res => {
                    this.context.router.history.push('/')
                },
                err => this.setState({ errors: err.response.data.errors, isLoading: false })
            )
        }
    }
  render() {
      const { errors, identifier, password, isLoading } = this.state
    return (
      <form onSubmit={ this.handleSubmit }>
        <h1>Login</h1>
        { errors.form && <div className="alert alert-danger">{ errors.form }</div>}
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
            <button disabled={ isLoading || this.state.invalid } className="btn btn-primary btn-lg">Sign In</button>
        </div>
      </form>
    )
  }
}

export default connect(null,{ login })(LoginForm)
