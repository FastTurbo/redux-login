import React, { Component } from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { createEvent } from '../../actions/eventActions'
import PropTypes from 'prop-types'

export class EventForm extends Component {
    static propTypes = {
        createEvent:PropTypes.func.isRequired,
    }

    state = {
        title: '',
        errors:[],
        isLoading:false
    }

    handleChange = e => {
        this.setState({[e.target.name] : e.target.value })
    }
    onSubmit = e => {
        e.preventDefault()
        this.props.createEvent(this.state)

        
    }
  render() {
    return (
      <form onSubmit={ this.onSubmit }>
        <h1>New Event</h1>
        <div className="form-group">
            <label className="control-label">Title</label>
            <input 
                type="text"
                value={ this.state.title }
                onChange={ this.handleChange }
                name="title"
                className={ classnames('form-control', { 'is-invalid': this.state.errors.title})}/>
            
        </div>
        <div className="form-group">
            <button disabled={ this.state.isLoading } className="btn btn-primary btn-lg">Create</button>
        </div>
      </form>
    )
  }
}

export default connect(null, { createEvent })(EventForm)
