import React, { FunctionComponent } from 'react';
import CSS from 'csstype';
import marked from 'marked';
import DOMPurify from 'dompurify';

type NoteTextViewProps = {
    text: string,
}

const style: CSS.Properties = {
    padding: '10px 20px'
}

const getMarkdownText = (text: string) => {
    let rawMarkup = marked(text);
    return { __html: DOMPurify.sanitize(rawMarkup) };
}

export const NoteTextView: FunctionComponent<NoteTextViewProps> = ({ text }) => <div style={style} dangerouslySetInnerHTML={getMarkdownText(text)} />