import {RouteComponentProps} from 'react-router';
import * as React from 'react';

interface AboutProps extends RouteComponentProps {
}

export class About extends React.PureComponent<AboutProps> {
  static displayName = 'About';

  render() {
    return (
      <p>
        I have a bad feeling About this.
      </p>
    );
  }
}
