import React, { Component } from 'react';
import { NoteModel } from 'models/NoteModel';
import CSS from 'csstype';
import marked from 'marked';
import DOMPurify from 'dompurify';

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

class NoteItem extends Component<NoteModel, {}> {
    getMarkdownText() {
        let rawMarkup = marked(this.props.text);
        return { __html: DOMPurify.sanitize(rawMarkup) };
    }
    render() {
        return <div style={styleContainer}>
            <div style={styleTitle}>{this.props.title}</div>
            <div style={styleText} dangerouslySetInnerHTML={this.getMarkdownText()} />
            <div style={styleActions}>
                <div style={styleActionsLeft}>
                    <button>Cancel</button>
                </div>
                <div style={styleActionsRight}>
                    <button>Edit</button>
                    <button>Save</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    }
}

export default NoteItem;