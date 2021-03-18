import React from 'react';

function Question(props) {
  return (
    <>
      <div className="row">
        <div className="col question">{props.question}</div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 choice-up">
            <div className="col choice">
              <div className="row icon">
                <img src={props.imgL} />
              </div>
              <div className="row text">
                <button className="waves-effect waves-light btn-small" onClick={e => props.handleL(e)}>
                  <span className="option">{props.optionL}</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 choice-down">
            <div className="col choice">
              <div className="row icon">
                <img src={props.imgR} />
              </div>
              <div className="row text">
                <button className="waves-effect waves-light btn-small" onClick={e => props.handleR(e)}>
                  <span className="option">{props.optionR}</span>
                </button>
              </div>
            </div>
          </div>
          {
            props.idx !== 0 && 
            <div className="row">
              <button className="waves-effect waves-light btn-small" onClick={e => props.goBack(e)}>
                <span className="option">이전 문항으로</span>
              </button>
            </div>
          }          
        </div>
      </div>
    </>
  );
}

export default Question;
