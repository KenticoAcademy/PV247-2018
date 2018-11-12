import React from 'react';

export const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.isSaving
        ? <i className="icon-loader" />
        : <i className="icon-save" />}
      {props.isSaving ? 'Saving' : 'Save'}
    </button>
  );
};

