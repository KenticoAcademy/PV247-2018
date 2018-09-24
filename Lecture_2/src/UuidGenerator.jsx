import React from 'react';
import { getUuid } from './utils/getUuid';

export class UuidGenerator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uuids: []
    };
  }

  onClick = (event) => {
    this.setState(prevState => ({
      uuids: [getUuid(), ...prevState.uuids]
    }));
    event.preventDefault();
    event.stopPropagation();
  };

  render() {
    return (
      <div>
        <button onClick={this.onClick}>
          Generate unique identifier
        </button>
        <ul>
          {this.state.uuids.map((uuid, index) => <li key={index}>{uuid}</li>)}
        </ul>
      </div>
    );
  }
}
