import React, { Component } from 'react';
import CSS from 'csstype';
import { NoteTextView } from './NoteTextView';
import NoteTextEdit from './NoteTextEdit';
import { NoteModel } from 'models/NoteModel';
import { decrypt } from 'helpers';

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
    loading: boolean,
}

type NoteItemProps = {
    note: NoteModel,
    onSaveNote: any,
    onDeleteNote: any,
    onEditing: any,
}

class NoteItem extends Component<NoteItemProps, NoteItemState> {
    state = {
        mode: 'view',
        note: this.props.note,
        loading: true,
    }
    componentDidMount() {
        decrypt(this.state.note.text).then((data: string) => {
            this.setState({ note: { ...this.state.note, text: data} });
            this.setState({ loading: false });
        });
    }

    componentWillReceiveProps(nextProps: NoteItemProps) {
        if (nextProps.note.id !== this.props.note.id) {
            this.setState({ loading: true });
            decrypt(this.state.note.text).then((data: string) => {
                this.setState({ note: { ...this.state.note, text: data} });
                this.setState({ loading: false });
            });
        }
    }

    handleEditNote() {
        this.setState({ mode: 'edit', note: this.props.note });
        this.props.onEditing(true);
    }

    handleCancelEditNote() {
        this.setState({ mode: 'view', note: this.props.note });
        this.props.onEditing(false);
    }

    previewNoteTitle(title: string) {
        const newNote = { ...this.state.note, title: title};
        this.setState({ note: newNote })
    }

    previewNoteText(text: string) {
        const newNote = { ...this.state.note, text: text};
        this.setState({ note: newNote })
    }

    handleSaveNote() {
        this.props.onSaveNote(this.state.note);
        this.setState({ mode: 'view' });
    }

    handleDeleteNote() {
        this.props.onDeleteNote(this.state.note);
    }

    render() {
        const mode = this.state.mode;
        if (mode === 'edit') {
            return <div style={styleContainer}>
                        <div style={styleTitleEdit}>
                            <input style={styleTitleEditInput} type="text" value={this.state.note.title} onChange={(event) => this.previewNoteTitle(event.target.value)}/>
                        </div>
                        <NoteTextEdit text={this.state.note.text} onChangeText={(text: string) => this.previewNoteText(text)}/>
                        <div style={styleActions}>
                            <div style={styleActionsLeft}>
                                <button onClick={this.handleCancelEditNote.bind(this)}>Cancel</button>
                            </div>
                            <div style={styleActionsRight}>
                                <button onClick={this.handleSaveNote.bind(this)}>Save</button>
                                <button onClick={this.handleDeleteNote.bind(this)}>Delete</button>
                            </div>
                        </div>
                    </div>
        } else {
            return <div style={styleContainer}>
                        <div style={styleTitle}>{this.props.note.title}</div>
                        {
                            this.state.loading ? 
                                <div>Loading...</div>
                            :    
                            <NoteTextView text={this.props.note.text} />
                        }
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