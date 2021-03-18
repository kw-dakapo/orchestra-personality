import React from 'react';

function Result(props) {
  return (
    <>
      <div className="container last">
        <div className="row">오케스트라에서 나의 역할은 ...?</div>   
      </div>

      <div className="container comments">
        <h2 className="col suggestion">{ props.name }!</h2>
        <div className="row"><img src={ props.img } /></div>
        <div className="row char">
            <ul>
              { props.description.map((e, idx) => <li>{ e }</li> )}
            </ul>
        </div>
        <div className="row good-partener">
            <h3>「 당신과 화음이 맞는 악기는?」</h3>
            <ul>
                <li>{ props.goodPartner }</li>
            </ul>
            <p>{ props.goodPartnerDescription }</p>
        </div>
        <div className="row bad-partener">
            <h3>「 당신과 불협화음인 악기는? 」</h3>
            <ul>
                <li>{ props.badPartner }</li>
            </ul>
            <p>{ props.badPartnerDescription }</p>
        </div>
        <div className="row good-partener mt-3">
          <h3>지금 바로 다카포에 지원해보세요!</h3>
          <ul>
            <li><a href="https://forms.gle/25NpwnANFuJDwKa8A" target="_blank" rel="noreferrer">지원서 쓰러가기 (새창에서 열림)</a></li>
          </ul>
        </div>
        <div className="row mb-4">
          <button className="waves-effect waves-light btn-small" onClick={() => window.location.reload()}>
            <span className="option">테스트 다시하기</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Result;
