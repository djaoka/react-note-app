import React, { Component } from 'react';
import CSS from 'csstype';

type NoteEditProps = {
    text: string,
    handleChange: any,
}

const style: CSS.Properties = {
    padding: '10px 20px',
    height: '50vh'
}

class NoteEdit extends Component<NoteEditProps, {}> {
    render() {
        return <textarea id="textearea" style={style} value={this.props.text} onChange={this.props.handleChange}></textarea>
    }
}

export default NoteEdit;