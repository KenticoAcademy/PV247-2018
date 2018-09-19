import * as React from 'react';

export interface IBadgeStateProps {
  readonly children: React.ReactNode;
}

export const Badge: React.SFC<IBadgeStateProps> = ({ children }) => (
  <span className="badge">{children}</span>
);
