import React, { Component } from 'react';
import { NoteModel } from 'models/NoteModel';
import CSS from 'csstype';
import { NoteEdit } from './NoteEdit';
import { NoteView } from './NoteView';

const styleContainer: CSS.Properties = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 0
}
const styleTitle: CSS.Properties = {
    fontWeight: 'bold',
    fontSize: '20px',
    padding: '10px 20px',
    borderBottom: '1px solid #ccc',
}
const styleActions: CSS.Properties = {
    padding: '10px 20px',
    display: 'flex',
    flexDirection: 'row',
    borderTop: '1px solid #ccc',
}
const styleActionsLeft: CSS.Properties = {
    display: 'flex',
}
const styleActionsRight: CSS.Properties = {
    display: 'flex',
    marginLeft: 'auto',
}

type NoteItemState = {
    editing: boolean
}

class NoteItem extends Component<NoteModel, NoteItemState> {

    constructor(props: any) {
        super(props);
        this.state = {editing: false};
    }
    
    handleEditNote() {
        this.setState({editing: true});
    }

    handleCancelEditNote() {
        this.setState({editing: false});
    }

    render() {
        const isEditing = this.state.editing;
        let note;
        if (isEditing) {
            note = <NoteEdit text={this.props.text} />;

        } else {
            note = <NoteView text={this.props.text} />;
        }
        return <div style={styleContainer}>
            <div style={styleTitle}>{this.props.title}</div>
            { note }
            <div style={styleActions}>
                <div style={styleActionsLeft}>
                    <button onClick={this.handleCancelEditNote.bind(this)}>Cancel</button>
                </div>
                <div style={styleActionsRight}>
                    <button onClick={this.handleEditNote.bind(this)}>Edit</button>
                    <button>Save</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    }
}

export default NoteItem;