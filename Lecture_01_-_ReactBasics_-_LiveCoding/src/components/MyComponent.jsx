import React from 'react';
import PropTypes from 'prop-types';

export class MyComponent extends React.Component {
  static propTypes = {
    warnThisPropIsMissing: PropTypes.string.isRequired,
  };

  constructor() {
    super();

    this._actOnInputChange = this._actOnInputChange.bind(this);

    this.state = {
      inputValue: '',
      items: [],
    };
  }

  _actOnInputChange(event) {
    console.log(`Hey there, I got this value in the event: ${event.target.value}.`);
    const stateUpdate = {
      inputValue: event.target.value,
    };
    this.setState(() => stateUpdate);
  }

  _submit = (event) => {
    event.preventDefault();
    this.setState((oldState) => ({
      items: [...oldState.items, oldState.inputValue],
      inputValue: '',
    }));
  };

  _onInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      this._submit();
    }
  };

  render() {
    return (
      <div className="chat u-mt-100">
        <div className="items">
          {this.state.items.map((item, index) => (
            <div
              className="item"
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
        <form
          onSubmit={this._submit}
        >
          <input
            onChange={this._actOnInputChange}
            value={this.state.inputValue}
          />
        </form>
      </div>
    );
  }
}
