import * as React from 'react';
import * as PropTypes from 'prop-types';

interface ButtonProps {
  value: number;
  onClick: () => void;
}

export class IncrementButton extends React.PureComponent<ButtonProps> {
  static displayName = 'IncrementButton';

  static propTypes = {
    value: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  render() {
    return (
      <button
        className="btn btn-success"
        type="button"
        onClick={this.props.onClick}
      >
        <span className="glyphicon glyphicon-plus"/>
        &nbsp;
        <span className="badge">
          {this.props.value}
        </span>
      </button>
    );
  }
}
