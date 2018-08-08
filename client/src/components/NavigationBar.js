import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../actions/loginAction'

export class NavigationBar extends Component {
    static propTypes = {
        auth:PropTypes.object.isRequired,
        logout:PropTypes.func.isRequired,
    }

    logout = e => {
        e.preventDefault()
        this.props.logout()
    }
  render() {
      const { isAuthenticated, user } = this.props.auth

      const userLinks = (
         <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link">{ user.username }</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" onClick={ this.logout }>Logout</a>
            </li>
        </ul>
      )

      const guestLinks = (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/login">Sign In</Link>
            </li>
        </ul>
      )
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <div className="container">
                <Link className="navbar-brand" to="/">Redux Login</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    {
                        isAuthenticated ? userLinks : guestLinks
                    }
                </div>
            </div>
        </nav>
    </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { logout })(NavigationBar)
