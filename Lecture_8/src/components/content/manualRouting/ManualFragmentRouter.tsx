import * as React from 'react';
import {Tab} from './Tab';
import {Panel} from './Panel';

const isFragmentHome = () => window.location.hash === '';
const isFragmentAbout = () => window.location.hash === '#About';

export class ManualFragmentRouter extends React.Component {
  static displayName = 'ManualFragmentRouting';

  private causeRerender = () => setTimeout(() => this.forceUpdate(), 0);

  render() {
    const links = (
      <ul className="nav nav-tabs">
        <Tab
          href="#"
          isActive={isFragmentHome()}
          onClick={this.causeRerender}
        >
          Home
        </Tab>
        <Tab
          href="#About"
          isActive={isFragmentAbout()}
          onClick={this.causeRerender}
        >
          About
        </Tab>
      </ul>
    );

    const routes = isFragmentAbout()
      ? <Panel>I feel so About it.</Panel>
      : <Panel>Fragment go Home,</Panel>;

    return (
      <>
        <h1>Hello Fragments…</h1>
        {links}
        {routes}
      </>
    );
  }
}
