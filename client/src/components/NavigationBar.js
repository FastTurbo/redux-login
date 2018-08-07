import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavigationBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <div className="container">
                <Link className="navbar-brand" to="/">Redux Login</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/signup">Sign Up</Link>
                        </li>
                        
            
                    </ul>
                
                </div>
            </div>
        </nav>
    </div>
    )
  }
}

export default NavigationBar
