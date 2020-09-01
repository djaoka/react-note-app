import React from 'react';
import { NoteModel } from 'models/NoteModel';
import { Link } from 'react-router-dom';
import CSS from 'csstype';

type NoteListProps = {
  notes: NoteModel[]
}

const styleList: CSS.Properties = {
  listStyleType: 'none'
}

const NoteList = ({ notes }: NoteListProps) => {
    return (
      <ul style={styleList}>
        {notes.map((note: NoteModel, index) => (
          <Link key={index} to={`/${note.id}`}>
            <li>{note.title}</li>
          </Link>
        ))}
      </ul>
    );
  }

export default NoteList;