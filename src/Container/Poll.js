import React from 'react';

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
  log: [],
}

function Poll() {
  const [offset, setOffset] = React.useState(0);
  const [result, setResult] = React.useState({});
  const [showResult, setShowResult] = React.useState(false);

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
    }
    user.log.push({
      select: "L"
    })
    moveNext()
  }
  const handleR = e => {
    const q = questionList[offset]
    if (q.when === "R") {
      user[q.increase] += 1
    }
    user.log.push({
      select: "R"
    })
    moveNext()
  }

  const goBack = e => {
    const q = questionList[offset - 1]
    const log = user.log.pop()
    if (log.select === q.when) {
      user[q.increase] -= 1
    }
    setOffset(offset - 1)
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
          goBack={ e => goBack(e) }
          idx={ offset }
        />
      }
    </div>
  );
}

export default Poll;
