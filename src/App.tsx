import React from 'react';
import './App.css';
import Header from 'components/Header';
import NoteList from 'components/NoteList';
import { RightPane } from 'components/RightPane';
import { LeftPane } from 'components/LeftPane';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="App-Section">
        <RightPane>
          <NoteList />
        </RightPane>
        <LeftPane>
          view / edit
        </LeftPane>
      </section>
    </div>
  );
}

export default App;
