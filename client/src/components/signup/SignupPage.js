import React, { Component } from 'react'
import SignupForm from './SignupForm'
import { connect } from 'react-redux'
import { userSignupRequest } from '../../actions/signupActions'

export class SignupPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
            <SignupForm userSignupRequest={ this.props.userSignupRequest }/>
        </div>
        <div className="col-md-3"></div>
      </div>
    )
  }
}

export default connect(null, { userSignupRequest })(SignupPage)
