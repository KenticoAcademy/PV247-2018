import * as React from 'react';
import * as PropTypes from 'prop-types';

interface IMessageFormDataProps {
  readonly nick: string;
  readonly message: string;
}

interface IMessageFormCallbackProps {
  readonly onSend: () => void;
  readonly onNickChange: (nick: string) => void;
  readonly onMessageChange: (message: string) => void;
}

export class MessageForm extends React.Component<IMessageFormDataProps & IMessageFormCallbackProps> {
  static propTypes = {
    onSend: PropTypes.func.isRequired,
    nick: PropTypes.string.isRequired,
    onNickChange: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    onMessageChange: PropTypes.func.isRequired,
  };

  onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.props.onSend();
  };

  onNickChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onNickChange(event.target.value);
  };

  onMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onMessageChange(event.target.value);
  };

  render(): JSX.Element {
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
