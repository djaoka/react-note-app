import React from 'react';
import { NoteModel } from 'models/NoteModel';
import { Link } from 'react-router-dom';
import CSS from 'csstype';

type NoteListProps = {
  notes: NoteModel[]
}

const styleList: CSS.Properties = {
  listStyleType: 'none',
  padding: 0,
  margin: 0,
}

const styleLink: CSS.Properties = {
  textDecoration: 'none',
  color: 'inherit',
}

const styleLi: CSS.Properties = {
  padding: '10px 15px',
}

const NoteList = ({ notes }: NoteListProps) => {
    return (
      <ul style={styleList}>
        {notes.map((note: NoteModel, index) => (
          <Link key={index} to={`/${note.id}`} style={styleLink}>
            <li style={styleLi}>{note.title}</li>
          </Link>
        ))}
      </ul>
    );
  }

export default NoteList;