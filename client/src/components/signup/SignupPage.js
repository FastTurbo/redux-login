import React, { Component } from 'react'
import SignupForm from './SignupForm'
import { connect } from 'react-redux'
import { userSignupRequest, isUserExists } from '../../actions/signupActions'
import { addFlashMessage } from '../../actions/flashMessages';

export class SignupPage extends Component {
  render() {
    const { userSignupRequest, addFlashMessage, isUserExists } = this.props
    return (
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
            <SignupForm 
            userSignupRequest={ userSignupRequest } 
            addFlashMessage={ addFlashMessage } 
            isUserExists={ isUserExists}/>
        </div>
        <div className="col-md-3"></div>
      </div>
    )
  }
}

export default connect(null, { userSignupRequest, addFlashMessage, isUserExists })(SignupPage)
