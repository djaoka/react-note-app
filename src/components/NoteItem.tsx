import React, { Component } from 'react';
import { NoteModel } from 'models/NoteModel';
import CSS from 'csstype';
import marked from 'marked';

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
    getMarkdownText() {
        var rawMarkup = marked(this.props.text);
        return { __html: rawMarkup };
    }
    render() {
        return <div style={styleContainer}>
            <div style={styleTitle}>{this.props.title}</div>
            <div style={styleText} dangerouslySetInnerHTML={this.getMarkdownText()} />
        </div>
    }
}

export default NoteItem;