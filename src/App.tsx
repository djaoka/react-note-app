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
import NoteItem from 'components/NoteItem';

const newNotes: NoteModel[] = notes.map((d: any) => d as NoteModel);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <section className="App-Section">
          <LeftPane>
            <NoteList notes={newNotes}/>
          </LeftPane>
          <RightPane>
            <Switch>
              <Route path="/:id" children={<FindNote />} />
              <Route path="*">
                <NoNote />
              </Route>
            </Switch>
          </RightPane>
        </section>
      </div>
    </Router>
  );
}

function NoNote() {
  return (
    <div className="App-NoNote">please select a note</div>
  )
}

function FindNote() {
  let { id } = useParams();
  const found = newNotes.find((n: NoteModel) => n.id === id);

  return (
      found ? <NoteItem id={found.title} title={found.title} text={found.text}/> : <NoNote />
  );
}

export default App;
