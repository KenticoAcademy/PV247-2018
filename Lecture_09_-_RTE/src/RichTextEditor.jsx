import { Editor } from 'draft-js';
import React from 'react';

export const RichTextEditor = (props) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '8px'
      }}
    >
      <div>
        <button
          onClick={props.onBoldButtonClicked}
          style={{
            marginRight: '4px'
          }}
        >
          Bold
        </button>
        <button onClick={props.onInserImageButtonClicked}>
          Insert image
        </button>
        <div
          style={{
            margin: '4px 0',
            borderTop: '1px solid #ccc'
          }}
        />
      </div>
        <Editor
          editorState={props.editorState}
          onChange={props.onChange}
          handleKeyCommand={props.handleKeyCommand}
          blockRendererFn={props.getBlockRenderer}
          // blockStyleFn={}
          // keyBindingFn={}
          // readOnly={}
          // spellCheck={}
          // stripPastedStyles={}
          // blockRenderMap={}
        />
    </div>
  );
};
