import React, { Component } from 'react';
import { NoteModel } from 'models/NoteModel';
import CSS from 'csstype';
import { NoteView } from './NoteView';
import NoteEdit from './NoteEdit';

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
    mode: string
}

class NoteItem extends Component<NoteModel, NoteItemState> {

    constructor(props: NoteModel) {
        super(props);
        this.state = { mode: 'view' };
    }
    
    handleEditNote() {
        this.setState({ mode: 'edit' });
    }

    handleCancelEditNote() {
        this.setState({ mode: 'view' });
    }

    render() {
        const mode = this.state.mode;
        let note;
        if (mode === 'edit') {
            return <div style={styleContainer}>
                <div style={styleTitle}>{this.props.title}</div>
                    <NoteEdit text={this.props.text} />
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
                <div style={styleTitle}>{this.props.title}</div>
                    <NoteView text={this.props.text} />
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