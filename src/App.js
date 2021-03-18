import React from 'react';
import './App.css';
import Poll from './Container/Poll'
import FirstPage from './Container/FirstPage'

function App() {
  const [firstPage, setFirstPage] = React.useState(true);
  return (
    <>
      {
        firstPage ?
        <FirstPage onStart={ () => setFirstPage(false) } /> :
        <Poll />
      }      
    </>
  );
}

export default App;
