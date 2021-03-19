import React from 'react';

function FirstPage(props) {
  return (
    <div className="container page" id="front">
      <div className="row">
        <h6>재미로 해보는 악기 MBTI</h6>
      </div>
      <div className="row survey-header">
        <div className="row survey-title">
          <div className="col title-word">당신의 성격과 가장 어울리는 악기는?</div>
          <div className="survey-subtitle">Ver. Da KAPO</div>
        </div>
      </div>
      <div className="row">
        <button className="bgcolor-primary  btn-small start" onClick={e => props.onStart(e)}><span>시작하기</span></button>
      </div>
      <div className="row mt-5">
        <p className="job">[스크립트 코딩]</p>
        <p className="people">문준석<span className="ksw">, 김성우</span></p>
        <p className="job">[그림]</p>
        <p className="people">류성희</p>
        <p className="job">[기획]</p>
        <p className="people">한동화, 전지유, 최정원</p>
      </div>
      <div className="row mt-5">
        <p className="row">
          [이미지출처] https://pixabay.com/ko/
        </p>
        <p className="row">
          [이미지출처] https://lso.co.uk/orchestra/players/
        </p>
      </div>
    </div>
  );
}

export default FirstPage;
