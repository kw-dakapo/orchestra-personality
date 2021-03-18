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
          <div className="row">
            <div className="col-8">광운대학교 아마추어 필하모닉 오케스트라</div>
            <div className="col-4"><img className="logo" src="img/logo.png" /></div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
