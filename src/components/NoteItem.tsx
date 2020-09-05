import React, { Component } from 'react';
import CSS from 'csstype';
import { NoteTextView } from './NoteTextView';
import NoteTextEdit from './NoteTextEdit';
import { NoteModel } from 'models/NoteModel';

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
const styleTitleEdit: CSS.Properties = {
    fontWeight: 'bold',
    fontSize: '20px',
    padding: '0',
    width: '100vh',
    borderBottom: '1px solid #ccc',
}
const styleTitleEditInput: CSS.Properties = {
    width: '100vh',
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
    mode: string,
    note: NoteModel,
}

type NoteItemProps = {
    note: NoteModel,
    onChangeTitle?: any,
    onChangeText?: any,
}

class NoteItem extends Component<NoteItemProps, NoteItemState> {
    state = {
        mode: 'view',
        note: this.props.note,
    }
    handleEditNote() {
        this.setState({ mode: 'edit' });
    }

    handleCancelEditNote() {
        this.setState({ mode: 'view' });
    }

    render() {
        const mode = this.state.mode;
        if (mode === 'edit') {
            return <div style={styleContainer}>
                        <div style={styleTitleEdit}>
                            <input style={styleTitleEditInput} type="text" value={this.props.note.title} onChange={(event) => this.props.onChangeTitle(event.target.value)}/>
                        </div>
                        <NoteTextEdit text={this.props.note.text} onChangeText={(text: string) => this.props.onChangeText(text)}/>
                        <div style={styleActions}>
                            <div style={styleActionsLeft}>
                                <button onClick={this.handleCancelEditNote.bind(this)}>Cancel</button>
                            </div>
                            <div style={styleActionsRight}>
                                <button>Save</button>
                                <button>Delete</button>
                            </div>
                        </div>
                    </div>
        } else {
            return <div style={styleContainer}>
                        <div style={styleTitle}>{this.props.note.title}</div>
                        <NoteTextView text={this.props.note.text} />
                        <div style={styleActions}>
                            <div style={styleActionsLeft}>
                            </div>
                            <div style={styleActionsRight}>
                                <button onClick={this.handleEditNote.bind(this)}>Edit</button>
                            </div>
                        </div>
                    </div>
        }
    }
}

export default NoteItem;