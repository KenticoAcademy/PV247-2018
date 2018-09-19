import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createItem } from '../actions/actionCreators';
import { INewTodoDispatchProps, NewTodo } from '../components/NewTodo';

const mapDispatchToProps = (dispatch: Dispatch): INewTodoDispatchProps => {
  return {
    onTodoAdd: (text: string) => dispatch(createItem(text)),
  };
};

export const NewTodoContainer = connect(undefined, mapDispatchToProps)(NewTodo);
