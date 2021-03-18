import React, { useEffect } from 'react';

import Question from "../Component/Question"
import Result from "../Component/Result"
import questionList from '../Data/questionList'
import resultList from '../Data/resultList'
import { assess } from '../Utils/utils'



const user = {
  "외향성": 0,
  "감성": 0,
  "강인함": 0,
  "리더십": 0,
}

function Poll() {
  const [offset, setOffset] = React.useState(0);
  const [result, setResult] = React.useState({});
  const [showResult, setShowResult] = React.useState(false);

  // useEffect(() => { 
  //   console.log("Behavior before the component is added to the DOM");}, []);

  const moveNext = () => {
    if (offset < questionList.length - 1 ) {
      setOffset(offset + 1)
    } else {
      const personality = assess(user)
      const r = resultList.filter(e => e.mbti === personality)[0]
      setResult(r)
      setShowResult(true)
    }
  }

  const handleL = e => {
    const q = questionList[offset]
    if (q.when === "L") {
      user[q.increase] += 1
      console.log(resultList)
    }
    moveNext()
  }
  const handleR = e => {
    const q = questionList[offset]
    if (q.when === "R") {
      user[q.increase] += 1
    }
    moveNext()
  }

  return (
    <div className="container page">
      { showResult ?
        <Result
          { ...result }
        /> :
        <Question
          { ...questionList[offset] }
          handleL={ e => handleL(e) }
          handleR={ e => handleR(e) }
        />
      }
    </div>
  );
}

export default Poll;
