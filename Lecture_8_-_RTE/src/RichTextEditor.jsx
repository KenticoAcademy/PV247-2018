import { Editor, EditorState, RichUtils } from 'draft-js';
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

  _handleKeyCommand = (command, editorState) => {
    if (command === 'bold') {
      const newState = RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        this._onChange(newState);
        return 'handled';
      }
    }

    return 'not-handled';
  };

  _onBoldButtonClicked = () => {
    this._onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
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
        <div>
          <button onClick={this._onBoldButtonClicked}>
            Bold
          </button>
          <div
            style={{
              margin: '4px 0',
              borderTop: '1px solid #333'
            }}
          />
        </div>
        <Editor
          editorState={this.state.editorState}
          onChange={this._onChange}
          handleKeyCommand={this._handleKeyCommand}
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
