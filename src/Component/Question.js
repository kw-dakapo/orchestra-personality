import React from 'react';

function Question(props) {
  return (
    <>
      <div className="row">
        <div className="col-12"><h3 className="question">{props.question}</h3></div>
      </div>
      <div className="row mt-2">
        <div className="col-md-6">
          <div className="choice mb-3">
            <div className="row icon">
              <img className="img-desc" src={props.imgL} />
            </div>
            <div className="row mb-2">
              <button className="text waves-effect waves-light btn-small" onClick={e => props.handleL(e)}>
                <span className="option">{props.optionL}</span>
              </button>
            </div>
            <div className="row mt-2"></div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="choice">
            <div className="row icon">
              <img className="img-desc" src={props.imgR} />
            </div>
            <div className="row">
              <button className="text waves-effect waves-light btn-small" onClick={e => props.handleR(e)}>
                <span className="option">{props.optionR}</span>
              </button>
            </div>
            <div className="row mt-2"></div>
          </div>
        </div>
      </div>
      {
        props.idx !== 0 &&
        <div className="row mt-5">
          <div className="col-12" style={{ textAlign: "center" }}>
            <button style={{ width: "100%" }} className="waves-effect waves-light btn-small" onClick={e => props.goBack(e)}>
              <span className="option">이전 문항으로</span>
            </button>
          </div>
        </div>
      }

    </>
  );
}

export default Question;
