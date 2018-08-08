import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LoginForm from './LoginForm'

export class LoginPage extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
            <LoginForm/>
        </div>
        <div className="col-sm-3"></div>
        
      </div>
    )
  }
}

export default LoginPage
