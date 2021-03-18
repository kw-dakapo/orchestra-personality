import React from 'react';

function FirstPage(props) {
  return (
    <div class="container page" id="front">
      <div class="row">
        <div class="col">
          <div>재미로 해보는 악기 MBTI</div>
          <div class="col survey-header">
            <div class="row survey-title">
              <div class="col title-word">당신의 성격과 가장 어울리는 악기는?</div>
            </div>
            <div class="survey-subtitle">Ver. Da KAPO</div>
          </div>
          <button class="waves-effect waves-light btn-small start" onClick={ e => props.onStart(e) }><span>시작하기</span></button>

          <div class="row wall-of-fame">
            <div class="contribute">
              <div class="job">
                [스크립트 코딩]
                </div>
              <div class="people">문준석, 김성우</div>
            </div>

            <div class="contribute">
              <div class="job">
                [그림]
                </div>
              <div class="people">류성희</div>
            </div>

            <div class="contribute">
              <div class="job">
                [기획]
                </div>
              <div class="people">한동화, 전지유, 최정원</div>
            </div>
          </div>


          <div class="row source">
            <div class="row source-list">
              [이미지출처] https://pixabay.com/ko/
                </div>
            <div class="row source-list">
              [이미지출처] https://lso.co.uk/orchestra/players/
                </div>
          </div>
        </div>
      </div>
      <div class="row club-tag">
        광운대학교 아마추어 오케스트라
        <img class="logo-img" src="img/logo.png" />
      </div>
    </div>
  );
}

export default FirstPage;
