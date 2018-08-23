import * as React from 'react';

export class TodoItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
    };
    this._audio = React.createRef();
  }

  _audio;

  doItem = () => {
    this.setState({
      done: true,
    });
    this._audio.current.play();
  };

  render() {
    return (

      <div onClick={this.doItem} className="checkbox">
        <input type="checkbox" checked={this.state.done} />
        <audio ref={this._audio}>
          <track kind="captions" src="https://www.myinstants.com/media/sounds/-click-nice_3.mp3"/>
        </audio>
        <span style={{ textDecoration: this.state.done ? 'line-through' : 'none' }}>{this.props.value}</span>

        {this.props.savingStatus !== 'none' && this.props.savingStatus}
      </div>);
  }
}
