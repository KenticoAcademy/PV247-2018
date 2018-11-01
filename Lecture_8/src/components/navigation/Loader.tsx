import * as React from 'react';
import * as ReactLoader from 'react-loader';

interface LoaderState {
 readonly isLoaded: boolean;
}

export class Loader extends React.Component<{}, LoaderState> {
  static displayName = 'Loader';

  state = {
    isLoaded: false,
  };

  componentWillMount() {
    setInterval(() => this.setState(() => ({isLoaded: true})), 750);
  }

  render() {
    return (
      <ReactLoader loaded={this.state.isLoaded}>
        {this.props.children}
      </ReactLoader>);
  }
}
