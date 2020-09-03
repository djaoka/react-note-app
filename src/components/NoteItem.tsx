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
    title: string,
    text: string,
}

class NoteItem extends Component<NoteModel, NoteItemState> {

    constructor(props: NoteModel) {
        super(props);
        this.state = { mode: 'view', title: props.title, text: props.text };
    }
    
    handleEditNote() {
        this.setState({ mode: 'edit' });
    }

    handleCancelEditNote() {
        this.setState({ mode: 'view' });
    }

    handleChangeTitle(event: any) {
        this.setState({title: event.target.value});
    }

    render() {
        const mode = this.state.mode;
        if (mode === 'edit') {
            return <div style={styleContainer}>
                    <div style={styleTitleEdit}>
                        <input style={styleTitleEditInput} type="text" value={this.state.title} onChange={this.handleChangeTitle.bind(this)}/>
                    </div>
                    <NoteEdit text={this.state.text} />
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
                    <div style={styleTitle}>{this.state.title}</div>
                    <NoteView text={this.state.text} />
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