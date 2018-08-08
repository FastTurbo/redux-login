import React, { Component } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

export class SignupForm extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        errors: {},
        isLoading: false
    }

    static contextTypes = {
        router: PropTypes.object,
    }
    

    onChange = e => {
        this.setState({[e.target.name] : e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({ errors:{}, isLoading:true })
        this.props.userSignupRequest(this.state)
        .then(() => {
            console.log(this.props)
            //只有Route指向的组件才能有history属性
            this.setState({ isLoading: false})
            //1 history()方法跳转,从Route指向的父级组件传递过来
            //2 使用withRouter() 高阶组件将组件包住，可自动使用history属性
            //3 使用context.router.history()跳转
            this.props.addFlashMessage({
                type:'success',
                text:'You signed up successfully, welcome.'
            })
            this.props.history.push('/')
            //this.context.router.history.push('/')
        },
        ({response}) => { this.setState({ errors: response.data, isLoading: false })})

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
            <button disabled={ this.state.isLoading } className="btn btn-primary btn-lg">Sign Up</button>
        </div>
      </form>
    )
  }
}

export default withRouter(SignupForm)
//export default SignupForm