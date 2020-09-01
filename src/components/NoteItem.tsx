import React, { Component } from 'react';
import { NoteModel } from 'models/NoteModel';
import CSS from 'csstype';

const styleContainer: CSS.Properties = {
    display: 'flex',
    flexDirection: 'column',
}

const styleTitle: CSS.Properties = {
    fontWeight: 'bold',
    fontSize: '20px',
}
const styleText: CSS.Properties = {
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