import { connect } from 'react-redux';
import { Badge, IBadgeStateProps } from '../components/Badge';
import { IState } from '../IState';

const mapStateToProps = (state: IState): IBadgeStateProps => {
  return {
    children: state.todoApp.items.count(),
  };
};

export const TodosCountBadge = connect<IBadgeStateProps>(mapStateToProps)(Badge);
