import React, { Component } from 'react';
import { NoteModel } from 'models/NoteModel';
import CSS from 'csstype';

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
const styleText: CSS.Properties = {
    padding: '10px 20px'
}

class NoteItem extends Component<NoteModel, {}> {
    render() {
        return <div style={styleContainer}>
            <div style={styleTitle}>{this.props.title}</div>
            <div style={styleText}>{this.props.text}</div>
        </div>
    }
}

export default NoteItem;