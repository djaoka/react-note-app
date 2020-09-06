import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import NotesContainer from 'containers/NotesContainer';
import notesJSON from 'data/notes.json';
import { NoteModel } from 'models/NoteModel';

function App(props: any) {

  const { notes = notesJSON.map((d: any) => d as NoteModel) } = props;

  return (
    <Router>
      <div className="App">
        <section className="App-Section">
          <NotesContainer notes={notes}/>
        </section>
      </div>
    </Router>
  );
}

export default App;
