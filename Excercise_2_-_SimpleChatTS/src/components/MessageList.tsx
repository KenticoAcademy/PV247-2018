import * as React from 'react';
import * as PropTypes from 'prop-types';
import {IMessage} from "../types/IMessage";

interface IMessageListProps {
  readonly messages: IMessage[];
}

export class MessageList extends React.Component<IMessageListProps> {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      from: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })),
  };

  render(): JSX.Element {
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
