import * as React from 'react';
import './countdown.css';

/*
	Component handling countdown, calls onComplete when countdown reaches 0
 */
export class Countdown extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ticksSinceStart: 0,
    };
  }

  componentDidMount() {
    /* TODO:
     Add countdown here, ticking every second
     You can use setInterval method
    */
  }

  render() {
    return (
      <div className="countdown">
        <div className="countdown__label">Remaining time:</div>
        <div className="countdown__time">
          {this.props.duration - this.state.ticksSinceStart} seconds
        </div>
      </div>
    );
  }
}
