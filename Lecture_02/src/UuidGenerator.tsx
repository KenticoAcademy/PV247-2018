import * as React from 'react';
import { getUuid } from './utils/getUuid';
import { Uuid } from './utils/Uuid';
import './generator.less';

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
      uuids: [getUuid(), ...prevState.uuids]
    }));
    event.preventDefault();
    event.stopPropagation();
  };

  renderListItem = (uuid: Uuid, index: number) => index !== 0
    ? <li key={index} className="generator__item">{uuid}</li>
    : <li key={index} className="generator__item generator__item--new">{uuid}</li>;

  render(): JSX.Element {
    const { uuids } = this.state;

    return (
      <div className="generator">
        <button onClick={this.onClick} className="generator__button">
          Generate unique identifier
        </button>
        <ul className="generator__list">
          {uuids.map((uuid, index) => this.renderListItem(uuid, index))}
        </ul>
      </div>
    );
  }
}
