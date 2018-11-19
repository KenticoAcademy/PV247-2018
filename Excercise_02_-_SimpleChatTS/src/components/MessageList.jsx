import React from 'react';
import PropTypes from 'prop-types';

// @TODO-2: Rewrite to TS

export class MessageList extends React.Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      from: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })),
  };

  render() {
    return (
      <div className="message-list">
        {this.props.messages && this.props.messages.map(message => (
          <div className="message" key={message.id}>
            <div className="message__author">
              {message.from}
            </div>
            <div className="message__text">
              {message.text}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
