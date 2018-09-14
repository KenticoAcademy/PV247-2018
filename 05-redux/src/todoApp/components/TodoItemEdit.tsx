import * as React from 'react';
import { ITodoItem } from '../models/ITodoItem';

interface IProps {
  readonly todo: ITodoItem;
  readonly onSave: (text: string) => void;
  readonly onCancel: () => void;
}

interface IState {
  readonly value: string;
}

export class ItemEdit extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      value: props.todo.text,
    };
  }

  private onSave = (event: React.FormEvent) => {
    event.preventDefault();

    this.props.onSave(this.state.value);

    this.setState(_ => ({ value: '' }));
  };

  private onValueChanged = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    this.setState(_ => ({ value }));
  };

  render() {
    return (
      <form onSubmit={this.onSave} className="todo-list__item-editing">
        <input
          value={this.state.value}
          onChange={this.onValueChanged}
          className="form-control"
        />
        <button type="submit" className="btn btn-primary">Save</button>
        <button type="button" className="btn btn-default" onClick={this.props.onCancel}>Cancel</button>
      </form>
    );
  }
}
