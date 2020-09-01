import React from 'react';
import { NoteModel } from 'models/NoteModel';

type NoteListProps = {
  notes: NoteModel[]
}

const NoteList = ({ notes }: NoteListProps) => {
    return (
      <ul>
        {notes.map((note: NoteModel, index) => (
          <li key={index}>{note.title}</li>
        ))}
      </ul>
    );
  }

export default NoteList;