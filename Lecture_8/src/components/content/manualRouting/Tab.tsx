import * as React from 'react';

interface TabProps {
  readonly isActive?: boolean;
  readonly href: string;
  readonly onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const Tab: React.StatelessComponent<TabProps> = ({isActive, href, onClick, children}) => (
  <li
    role="presentation"
    className={isActive
      ? 'active'
      : undefined}
  >
    <a
      href={href}
      onClick={onClick}
    >
      {children}
    </a>
  </li>
);

Tab.displayName = 'Tab';
