import React from 'react';
import './App.css';
import Header from 'components/Header';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import NotesContainer from 'containers/NotesContainer';
import notes from 'data/notes.json';
import { NoteModel } from 'models/NoteModel';

const newNotes: NoteModel[] = notes.map((d: any) => d as NoteModel);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <section className="App-Section">
          <NotesContainer notes={newNotes} />
        </section>
      </div>
    </Router>
  );
}

export default App;
