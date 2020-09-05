import React, { useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import './App.css';
import Header from 'components/Header';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import NotesContainer from 'containers/NotesContainer';
import notesJSON from 'data/notes.json';
import { NoteModel } from 'models/NoteModel';

function App() {
  const [ notes, setNotes] = useState(
    notesJSON.map((d: any) => d as NoteModel)
  );

  const handleAddNote = () => {
    let newNotes = [...notes];
    newNotes.push({ id: uuidv1(), title: 'new', text: 'try markdown' });
    setNotes(newNotes);
  }

  return (
    <Router>
      <div className="App">
        <Header onAddNote={handleAddNote}/>
        <section className="App-Section">
          <NotesContainer notes={notes}/>
        </section>
      </div>
    </Router>
  );
}

export default App;
