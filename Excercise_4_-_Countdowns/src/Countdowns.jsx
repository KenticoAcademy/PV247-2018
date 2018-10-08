import React from 'react';
import { Countdown } from "./Countdown";
import './countdowns.css';

/*
	Component which holds timers
 */
export class Countdowns extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lastTimerIndex: 0,
      input: '',
      timers: [{ duration: 42, identifier: 0 }]		// optional: Replace Array with Immutable.List
    };
  }

  onChangeInput = (e) => {
    this.setState({
      input: e.target.duration,
    });
  };

  addTimer = (newTimerDuration) => {
    /* TODO:
    Insert code which will add new timer with unique identifier into this.state.timers, for
    uniqueness you can use this.state.lastTimerIndex and increment it afterwards
     */
  };

  removeTimer = (identifier) => {
    this.setState((prevState) => {
      const updatedTimers = prevState.timers.filter(timer => timer.identifier !== identifier);
      return ({
        timers: updatedTimers,
      });
    });
  };

  render() {
    return (
      <div className="countdowns">
        <header className="countdowns__header">
          <h3>Your Countdowns</h3>
        </header>
        <div className="countdowns__add-new">
          <input
            className="countdowns__input"
            type="number"
            value={this.state.input}
            onChange={this.onChangeInput}
            min={0}
            placeholder="Duration"
          />
          <button onClick={() => this.addTimer(this.state.input)}>Add</button>
        </div>
        <div className="countdowns__grid">
          {this.state.timers.map((timer) => (
            <Countdown
              duration={timer.duration}
              onComplete={() => {
                this.removeTimer(timer.identifier);
              }}
              key={timer.identifier}
            />
          ))}
        </div>
      </div>

    );
  }
}
