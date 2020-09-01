import React from 'react';
import './App.css';
import Header from 'components/Header';
import NoteList from 'components/NoteList';
import { RightPane } from 'components/RightPane';
import { LeftPane } from 'components/LeftPane';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import notes from 'data/notes.json';
import { NoteModel } from 'models/NoteModel';

const newNotes: NoteModel[] = notes.map((d: any) => d as NoteModel);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <section className="App-Section">
          <RightPane>
            <NoteList notes={newNotes}/>
          </RightPane>
          <LeftPane>
          <Switch>
            <Route path="/:id" children={<FindNote />} />
            <Route path="*">
              <div className="App-NoNote">please select a note</div>
            </Route>
          </Switch>
          </LeftPane>
        </section>
      </div>
    </Router>
  );
}

function FindNote() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default App;
