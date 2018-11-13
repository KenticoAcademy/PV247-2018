/* eslint-disable */
import React from 'react';
import { CompositeDecorator } from 'draft-js';

const TagSpan = (props) => {
  return (
    <span
      style={{
        backgroundColor: 'rgba(204,204,204, .3)',
        padding: '0px 2px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
      {props.children}
    </span>
  )
};

function findWithRegex(regex, contentBlock, callback) {
  const text = contentBlock.getText();
  let matchArr, start;
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}

export const TagDecorator = new CompositeDecorator([
  {
    strategy: (contentBlock, callback) => {
      findWithRegex(/#[a-zA-Z0-9]+/g, contentBlock, callback);
    },
    component: TagSpan
  }
]);
