const questionList = [
  {
    question: "개강 후 첫 수업! 옆에 모르는 사람이 앉으면",
    imgL: "img/1L.jpg",
    optionL: "말을 건다",
    imgR: "img/1R.jpg",
    optionR: "핸드폰만 본다",
    increase: "외향성",
    when: "L"
  },
  {
    question: "나는 사람들과 같이 있으면",
    imgL: "img/2L.jpg",
    optionL: "에너지를 얻는다",
    imgR: "img/2R.jpg",
    optionR: "에너지를 소모한다",
    increase: "외향성",
    when: "L"
  },
  {
    question: "식당에서 주문을 하거나 전화주문을 하게되면",
    imgL: "img/3L.jpg",
    optionL: "아무렇지 않다",
    imgR: "img/3R.jpg",
    optionR: "어색하고 긴장된다",
    increase: "외향성",
    when: "L"
  },
  {
    question: "팀플에서 나의 역할은",
    imgL: "img/4L.jpg",
    optionL: "발표하는 사람",
    imgR: "img/4R.jpg",
    optionR: "ppt만드는 사람",
    increase: "외향성",
    when: "L"
  },
  {
    question: "수업끝나고 개총이 있으면?",
    imgL: "img/5L.jpg",
    optionL: "무조건 간다",
    imgR: "img/5R.jpg",
    optionR: "집이나 간다",
    increase: "외향성",
    when: "L"
  },
  // <!-- 이성적 감성적-->
  {
    question: "조원이 팀플에 참여하지 못한 사정을 설명하면",
    imgL: "img/6L.jpg",
    optionL: "어쩌라고",
    imgR: "img/6R.jpg",
    optionR: "마음은 이해해한다",
    increase: "감성",
    when: "L"
  },
  {
    question: "친구가 누구와 다툰 이야기를 하면",
    imgL: "img/7L.jpg",
    optionL: "잘잘못을 지적한다",
    imgR: "img/7R.jpg",
    optionR: "친구편을 든다",
    increase: "감성",
    when: "L"
  },
  {
    question: "타야하는 버스가 옆을 지나가면",
    imgL: "img/8L.jpg",
    optionL: "보내주고 다음거 탄다",
    imgR: "img/8R.jpg",
    optionR: "곱게 못 보낸다",
    increase: "감성",
    when: "L"
  },
  {
    question: "수강신청에 실패하면",
    imgL: "img/9L.jpg",
    optionL: "다른 과목을 알아본다",
    imgR: "img/9R.jpg",
    optionR: "휴학절차를 알아본다",
    increase: "감성",
    when: "L"
  },
  {
    question: "드라마, 영화를 보면 감정이입을",
    imgL: "img/10L.jpg",
    optionL: "안하는 편이다",
    imgR: "img/10R.jpg",
    optionR: "많이 한다",
    increase: "감성",
    when: "L"
  },
  // <!-- 강인함 섬세-->
  {
    question: "새해에 계획을 세울 때",
    imgL: "img/11L.jpg",
    optionL: "큰 계획만 세우는 편이다",
    imgR: "img/11R.jpg",
    optionR: "자세하게 많이",
    increase: "강인함",
    when: "L"
  },
  {
    question: "시험에서 모르는 문제가 나오면",
    imgL: "img/12L.jpg",
    optionL: "건들지 않는다",
    imgR: "img/12R.jpg",
    optionR: "뭐라도 적는다",
    increase: "강인함",
    when: "L",
  },
  {
    question: "내가 최애 노래에 빠진 이유는?",
    imgL: "img/13L.jpg",
    optionL: "비트가 좋아서",
    imgR: "img/13R.jpg",
    optionR: "멜로디가 좋아서",
    increase: "강인함",
    when: "L",
  },
  {
    question: "상대방과 의견충돌이 나면 주로",
    imgL: "img/14L.jpg",
    optionL: "일단 듣는 편이다",
    imgR: "img/14R.jpg",
    optionR: "내 주장을 어필한다",
    increase: "강인함",
    when: "L",
  },
  {
    question: "누군가와 대화를 할 때",
    imgL: "img/15L.jpg",
    optionL: "남의 신경을 안 쓴다",
    imgR: "img/15R.jpg",
    optionR: "남 신경을 많이 쓴다",
    increase: "강인함",
    when: "L",
  },
  // < !--리더 서포터-- >
  {
    question: "팀플에서 조장을 맡게되면",
    imgL: "img/16L.jpg",
    optionL: "잘할 수 있다",
    imgR: "img/16R.jpg",
    optionR: "드랍한다",
    increase: "리더십",
    when: "L",
  },
  {
    question: "예전에 반장선거에 출마한적이",
    imgL: "img/17L.jpg",
    optionL: "있다",
    imgR: "img/17R.jpg",
    optionR: "없다",
    increase: "리더십",
    when: "L",
  },
  {
    question: "여행을 가게되면 주로",
    imgL: "img/18L.jpg",
    optionL: "계획을 세우는 편이다",
    imgR: "img/18R.jpg",
    optionR: "스케쥴을 따르는 편이다",
    increase: "리더십",
    when: "L",
  },
  {
    question: "누군가 시키는 대로 하는것이",
    imgL: "img/19L.jpg",
    optionL: "불만이다",
    imgR: "img/19R.jpg",
    optionR: "차라리 편하다",
    increase: "리더십",
    when: "L",
  },
  {
    question: "남들이 내 말에 주목하는 것이",
    imgL: "img/20L.jpg",
    optionL: "당당하고 자신있다",
    imgR: "img/20R.jpg",
    optionR: "불안하고 쑥스럽다",
    increase: "리더십",
    when: "L",
  },
]
export default questionList