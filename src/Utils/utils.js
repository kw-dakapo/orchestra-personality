
export const assess = ({ 외향성, 감성, 강인함, 리더십 }) => {
  let res = ""
  if(외향성 > 2){
      res += "E"
  } else{
      res += "I"
  }
  
  if (감성 > 2){
      res += "R"
  } else{
      res += "E"
  }
  
  if(강인함 > 2){
      res += "R"
  } else{
      res += "S"
  }
  
  if(리더십 > 2){
      res += "L"
  } else{
      res += "S"
  }

  return res
}
