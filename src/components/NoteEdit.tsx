import React, { FunctionComponent } from 'react';
import CSS from 'csstype';

type NoteViewProps = {
    text: string,
}

const style: CSS.Properties = {
    padding: '10px 20px'
}

export const NoteEdit: FunctionComponent<NoteViewProps> = ({ text }) => <textarea style={style}>{text}</textarea>