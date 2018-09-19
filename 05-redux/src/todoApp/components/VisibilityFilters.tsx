import * as React from 'react';
import { TodoFilter } from '../constants/TodoFilter';
import { VisibilityFilterContainer } from '../containers/VisibilityFilter';

export const VisibilityFilters: React.SFC = () => {
  return (
    <div className="filters btn-group" role="group">
      <VisibilityFilterContainer filter={TodoFilter.All}>All</VisibilityFilterContainer>
      <VisibilityFilterContainer filter={TodoFilter.Todo}>Todo</VisibilityFilterContainer>
      <VisibilityFilterContainer filter={TodoFilter.Done}>Done</VisibilityFilterContainer>
    </div>
  );
};
