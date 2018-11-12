/* eslint-disable */
import React from 'react';
import { CompositeDecorator } from 'draft-js';

const TagSpan = (props) => {
  return (
    <span
      style={{
        backgroundColor: 'red'
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
