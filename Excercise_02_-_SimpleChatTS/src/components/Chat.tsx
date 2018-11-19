import * as React from 'react';
import * as uuid from 'uuid/v4';
import { MessageList } from './MessageList.jsx';
import { MessageForm } from './MessageForm.jsx';
import { chatServerUrl } from '../config';

interface IMessage {
  readonly id: string;
  readonly from: string;
  readonly text: string;
}

interface IServerMessage {
  readonly id: string;
  readonly nick: string;
  readonly text: string;
}

interface IChatState {
  readonly nick: string;
  readonly message: string;
  readonly messages: IMessage[];
}

export class Chat extends React.Component<null, IChatState> {
  constructor(props: any) {
    super(props); // Must be called to properly build the base object and initialize its prototype.

    this.state = {
      nick: '',
      message: '',
      messages: [],
    };
  }

  // <editor-fold desc="Message sending and getting — DO NOT TOUCH" defaultstate="collapsed">

  getMessages = async () => {
    console.log('Getting messages!!!');
    const messages: IServerMessage[] = await (await fetch(`${chatServerUrl}messages`)).json();
    this.setState({
      messages: messages.map(message => ({
        ...message,
        from: message.nick,
      })),
    });
  };

  getMessagesInterval = setInterval(this.getMessages, 2000);
  createGuid = () => uuid();

  postMessage = (nick: string, text: string) => {
    console.log(`Sending message from '${nick}' saying '${text}'.`);
    fetch(`${chatServerUrl}message`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text,
        nick,
      }),
    });
  };

  // </editor-fold>

  updateMessage = (message: string) => {
    this.setState({ message });
  };

  updateNick = (nick: string) => {
    this.setState({ nick });
  };

  sendMessage = (): void => {
    this.postMessage(this.state.nick, this.state.message);
    this.updateMessage('');
  };

  render(): JSX.Element {
    return (
      <div className="chat">
        <MessageList messages={this.state.messages} />
        <MessageForm
          onSend={this.sendMessage}
          nick={this.state.nick}
          onNickChange={this.updateNick}
          message={this.state.message}
          onMessageChange={this.updateMessage}
        />
      </div>
    );
  }
}
