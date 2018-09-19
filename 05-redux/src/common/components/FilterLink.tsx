import * as React from 'react';

export interface IFilterLinkStateProps {
  readonly isActive?: boolean;
}

export interface IFilterLinkDispatchProps {
  readonly onClick?: () => void;
}

export const FilterLink: React.SFC<IFilterLinkStateProps & IFilterLinkDispatchProps> = ({ isActive, onClick, children }) => (
  <button
    type="button"
    onClick={isActive ? undefined : onClick}
    className={`btn ${isActive ? 'btn-primary' : 'btn-default'}`}
  >
    {children}
  </button>
);
