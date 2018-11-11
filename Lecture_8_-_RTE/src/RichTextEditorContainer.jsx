import React from "react";
import { EditorState, RichUtils } from "draft-js";
import { RichTextEditor } from "./RichTextEditor";

export class RichTextEditorContainer extends React.PureComponent {
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
      <RichTextEditor
        onBoldButtonClicked={this._onBoldButtonClicked}
        editorState={this.state.editorState}
        onChange={this._onChange}
        handleKeyCommand={this._handleKeyCommand}
      />
    );
  }
}
