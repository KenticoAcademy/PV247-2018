import React from "react";
import { EditorState, RichUtils, AtomicBlockUtils } from "draft-js";
import { RichTextEditor } from "./RichTextEditor";
import { CustomBlock, entityTypes } from "./CustomBlock";
import { TagDecorator } from "./TagDecorator";

const imageUrl = 'http://dogecoin.com/imgs/dogecoin-300.png';


export class RichTextEditorContainer extends React.PureComponent {
  state = {
    editorState: EditorState.set(EditorState.createEmpty(), {
      decorator: TagDecorator,
    }),
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

  _onImageInserted = () => {
    const contentState = this.state.editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      entityTypes.image,
      'IMMUTABLE',
      {
        src: imageUrl
      }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(
      this.state.editorState,
      {currentContent: contentStateWithEntity}
    );
    this._onChange(AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' '));
  };

  _getBlockRenderer = (block) => {
    if (block.getType() === 'atomic') {
      return {
        component: CustomBlock,
        editable: false,
      };
    }

    return null;
  };

  render() {
    return (
      <RichTextEditor
        onBoldButtonClicked={this._onBoldButtonClicked}
        editorState={this.state.editorState}
        onChange={this._onChange}
        handleKeyCommand={this._handleKeyCommand}
        getBlockRenderer={this._getBlockRenderer}
        onInserImageButtonClicked={this._onImageInserted}
      />
    );
  }
}
