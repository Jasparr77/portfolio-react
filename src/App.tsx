import React, {useState, useEffect} from 'react';
import Warning from './Warning';
import Words from './Words';

function App() {
  return (
    <>
    <Words/>
    <Warning
      color={'salmon'}
      header='this site is kind of boring, for now.'
      text={"I\'m working on making it cooler, though. Come back soon!"}
      />
    </>
  );
}

export default App;
