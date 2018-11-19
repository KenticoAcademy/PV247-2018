import React from 'react';
import PropTypes from 'prop-types';

// @TODO-1: Rewrite to TS

export class MessageForm extends React.Component {
  static propTypes = {
    onSend: PropTypes.func.isRequired,
    nick: PropTypes.string.isRequired,
    onNickChange: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    onMessageChange: PropTypes.func.isRequired,
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSend();
  };

  onNickChange = (event) => {
    this.props.onNickChange(event.target.value);
  };

  onMessageChange = (event) => {
    this.props.onMessageChange(event.target.value);
  };

  render() {
    return (
      <form
        className="message-form"
        onSubmit={this.onSubmit}
      >
        <label
          htmlFor="nick"
          className="message-form__nick-label"
        >
          Nick:
        </label>
        <input
          className="message-form__nick-input"
          id="nick"
          value={this.props.nick}
          onChange={this.onNickChange}
        />
        <label
          className="message-form__message-label"
          htmlFor="message"
        >
          Message:
        </label>
        <input
          id="message"
          className="message-form__message-input"
          autoComplete="off"
          value={this.props.message}
          onChange={this.onMessageChange}
        />
        <button type="submit">Send</button>
      </form>

    );
  }
}
