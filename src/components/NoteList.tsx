import React from 'react';
import { NoteModel } from 'models/NoteModel';
import { Link } from 'react-router-dom';

type NoteListProps = {
  notes: NoteModel[]
}

const NoteList = ({ notes }: NoteListProps) => {
    return (
      <ul>
        {notes.map((note: NoteModel, index) => (
          <Link key={index} to={`/${note.id}`}>
            <li>{note.title}</li>
          </Link>
        ))}
      </ul>
    );
  }

export default NoteList;