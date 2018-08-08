import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import FlashMessage from './FlashMessage'
import { deleteFlashMessage } from '../../actions/flashMessages'

export class FlashMessagesList extends Component {
    static propTypes = {
        messages: PropTypes.array.isRequired,
    }

  render() {
    const messagesNode = this.props.messages.map(message => (
        <FlashMessage key={ message.id } message={ message } deleteFlashMessage={ this.props.deleteFlashMessage }/>
    ))
    return (
      <div className="container">
        { messagesNode }
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        messages: state.flashMessages
    }
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList)
