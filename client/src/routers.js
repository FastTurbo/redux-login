import React from 'react'
import { Route } from 'react-router-dom'
import App from './components/App'
import SignupPage from './components/signup/SignupPage'
import LoginPage from './components/login/LoginPage'
import NewEventPage from './components/event/NewEventPage'

import requireAuth from './utils/requireAuth'

export default (
    <div className="container">
        <Route exact path="/" component={ requireAuth(App) }/>
        <Route path="/signup" component={ SignupPage }/>
        <Route path="/login" component={ LoginPage }/>
        <Route path="/event" component={ requireAuth(NewEventPage) }/>
    </div>
)