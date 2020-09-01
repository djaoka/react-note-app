import React from 'react';
import './App.css';
import Header from 'components/Header';
import NoteList from 'components/NoteList';
import { RightPane } from 'components/RightPane';
import { LeftPane } from 'components/LeftPane';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoteItem from 'components/NoteItem';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <section className="App-Section">
          <RightPane>
            <NoteList />
          </RightPane>
          <LeftPane>
          <Switch>
            <Route path="/:id" children={<NoteItem />} />
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

export default App;
