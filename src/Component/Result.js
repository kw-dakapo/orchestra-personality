import React from 'react';

function Result(props) {
  return (
    <>
      <div class="container last">
        <div class="row">오케스트라에서 나의 역할은 ...?</div>   
      </div>

      <div class="container comments">
        <h2 class="col suggestion">{ props.name }!</h2>
        <div class="row"><img src={ props.img } /></div>
        <div class="row char">
            <ul>
              { props.description.map((e, idx) => <li>{ e }</li> )}
            </ul>
        </div>
        <div class="row good-partener">
            <h3>「 당신과 화음이 맞는 악기는?」</h3>
            <ul>
                <li>{ props.goodPartner }</li>
            </ul>
            <p>{ props.goodPartnerDescription }</p>
        </div>
        <div class="row bad-partener">
            <h3>「 당신과 불협화음인 악기는? 」</h3>
            <ul>
                <li>{ props.badPartner }</li>
            </ul>
            <p>{ props.badPartnerDescription }</p>
        </div>
      </div>
    </>
  );
}

export default Result;
