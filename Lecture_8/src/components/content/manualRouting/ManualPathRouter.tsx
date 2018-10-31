import * as React from 'react';
import {Tab} from './Tab';
import {Panel} from './Panel';

const isPathHome = () => window.location.pathname === '/';
const isPathAbout = () => window.location.pathname === '/About';

export class ManualPathRouter extends React.Component {
  static displayName = 'ManualPathRouter';

  private causeRerender = () => setTimeout(() => this.forceUpdate(), 0);

  private followLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const newHistoryState = {
      title: event.currentTarget.title,
      url: event.currentTarget.href,
    };

    history.pushState(newHistoryState, newHistoryState.title, newHistoryState.url);

    this.causeRerender();
  };

  render() {
    const links = (
      <ul className="nav nav-tabs">
        <Tab
          href="/"
          isActive={isPathHome()}
          onClick={this.followLink}
        >
          Home
        </Tab>
        <Tab
          href="/About"
          isActive={isPathAbout()}
          onClick={this.followLink}
        >
          About
        </Tab>
      </ul>
    );

    const routes = isPathAbout()
      ? <Panel>It is About time.</Panel>
      : <Panel>The path to Home is long and winding.</Panel>;

    return (
      <>
        <h1>Path to follow…</h1>
        {links}
        {routes}
      </>
    );
  }
}
