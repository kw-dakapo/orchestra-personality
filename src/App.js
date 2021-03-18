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
      <footer>
        <div  className="container">
          <div className="row" style={{ textAlign: "center", fontSize: "14px" }}><p>(c) 2021 광운대학교 아마추어 필하모닉 오케스트라 DaKAPO All Rights Reserved</p></div>
          <div className="row mt-1"><p><img className="logo" src="img/logo.png" /></p></div>
        </div>
      </footer>
    </>
  );
}

export default App;
