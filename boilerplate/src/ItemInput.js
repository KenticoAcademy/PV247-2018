import * as React from 'react';

export class ItemAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onTextChange = (newValue) => {
    this.setState({
      value: newValue
    });
  };

  onAdd = () => {
    this.props.onAdd(this.state.value);
    this.setState({
      value: '',
    });
  };

  render() {
    return (
      <div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={this.state.value}
            onChange={(e) => this.onTextChange(e.target.value)}
          />
        </div>
        <button onClick={this.onAdd} className="btn btn-success input-group-append">Add</button>
      </div>
    );
  }
}
