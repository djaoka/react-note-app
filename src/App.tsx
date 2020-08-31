import React from 'react';
import './App.css';
import Header from 'components/Header';
import NoteList from 'components/NoteList';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="App-Section">
        <NoteList />
        <div>edit/view</div>
      </section>
    </div>
  );
}

export default App;
