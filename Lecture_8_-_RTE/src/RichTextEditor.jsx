import { Editor, EditorState } from 'draft-js';
import React from 'react';

export class RichTextEditor extends React.PureComponent {
  state = {
    editorState: EditorState.createEmpty()
  };

  _onChange = (editorState) => {
    this.setState(() => ({
      editorState,
    }));
  };

  render() {
    return (
      <div
        style={{
          border: '1px solid #333',
          borderRadius: '4px',
          padding: '8px'
        }}
      >
        <Editor
          editorState={this.state.editorState}
          onChange={this._onChange}
          // blockRendererFn={}
          // blockStyleFn={}
          // keyBindingFn={}
          // readOnly={}
          // spellCheck={}
          // stripPastedStyles={}
          // blockRenderMap={}
        />
      </div>
    );
  }
}
