import * as React from 'react';
import { getUuid } from './utils/getUuid';
import { Uuid } from './utils/Uuid';

interface IUuidGeneratorState {
  readonly uuids: Uuid[];
}

export class UuidGenerator extends React.Component<null, IUuidGeneratorState> {
  constructor(props: any) {
    super(props);

    this.state = {
      uuids: []
    };
  }

  onClick = (event: React.MouseEvent) => {
    this.setState(prevState => ({
      uuids: [...prevState.uuids, getUuid()]
    }));
    event.preventDefault();
    event.stopPropagation();
  };

  render(): JSX.Element {
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
