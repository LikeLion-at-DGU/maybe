/*
음정표:
  0옥타브 도 = 1
  0옥타브 레 = 2
  0옥타브 미 = 3
  0옥타브 파 = 4
  0옥타브 솔 = 5
  0옥타브 라 = 6
  0옥타브 시 = 7
  1옥타브 도 = 8
  1옥타브 레 = 9
  1옥타브 미 = 10
  1옥타브 파 = 11
  1옥타브 솔 = 12
  1옥타브 라 = 13
  1옥타브 시 = 14
  2옥타브 도 = 15
  2옥타브 레 = 16
  2옥타브 미 = 17
  2옥타브 파 = 18
  2옥타브 솔 = 19
  2옥타브 라 = 20
  2옥타브 시 = 21
  3옥타브 도 = 22
  3옥타브 레 = 23
  3옥타브 미 = 24
  3옥타브 파 = 25
  3옥타브 솔 = 26
  3옥타브 라 = 27
  3옥타브 시 = 28
*/

const btn = document.getElementById('btn-change-text');
const special = document.getElementById('special');
const normal = document.getElementById('normal');
const myMin = document.querySelector("#my_min");
const myMax = document.querySelector("#my_max");
const chosenSong = document.querySelector("#chosen_song");
const wantSong = document.querySelector(".want_song")
const resultBoolean = document.querySelector(".result_boolean");
const resultDetail = document.querySelector(".result_detail");
const totalSongList = [
  
  
  {
    name: "이 소설의 끝을 다시 써보려 해",
    singer: "한동근",
    min: "6",
    max: "21",
    min_name: "0옥타브 라",
    max_name: "2옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=이+소설의+끝을+다시+써보려+해",
    image_name: "이 소설의 끝을 다시 써보려 해",
    genre: "ballad",
  },
  {
    name: "바람이 불었으면 좋겠어",
    singer: "길구봉구",
    min: "11",
    max: "22",
    min_name: "1옥타브 파",
    max_name: "3옥타브 도",
    youtube: "https://www.youtube.com/results?search_query=바람이+불었으면+좋겠어",
    image_name: "바람이 불었으면 좋겠어",
    genre: "ballad",
  },
  {
    name: "봄 사랑 벚꽃 말고",
    singer: "HIGH4(하이포),아이유",
    min: "7",
    max: "23",
    min_name: "0옥타브 시",
    max_name: "3옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=봄+사랑+벚꽃+말고",
    image_name: "봄 사랑 벚꽃 말고",
    genre: "ballad",
  },
  {
    name: "금요일에 만나요",
    singer: "아이유",
    min: "14",
    max: "26",
    min_name: "1옥타브 시",
    max_name: "3옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=금요일에+만나요",
    image_name: "금요일에 만나요",
    genre: "ballad",
  },
  {
    name: "또 다시 사랑",
    singer: "임창정",
    min: "8",
    max: "21",
    min_name: "1옥타브 도",
    max_name: "2옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=또+다시+사랑",
    image_name: "또 다시 사랑",
    genre: "ballad",
  },
  {
    name: "걱정말아요 그대",
    singer: "이적",
    min: "6",
    max: "21",
    min_name: "0옥타브 라",
    max_name: "2옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=이적+걱정말아요+그대",
    image_name: "걱정말아요 그대",
    genre: "ballad",
  },
  {
    name: "우연히 봄",
    singer: "로꼬,유주(여자친구)",
    min: "14",
    max: "24",
    min_name: "1옥타브 시",
    max_name: "3옥타브 미",
    youtube: "https://www.youtube.com/results?search_query=우연히+봄",
    image_name: "우연히 봄",
    genre: "ballad",
  },
  {
    name: "너의 의미",
    singer: "아이유",
    min: "13",
    max: "22",
    min_name: "1옥타브 라",
    max_name: "3옥타브 도",
    youtube: "https://www.youtube.com/results?search_query=아이유+너의+의미",
    image_name: "너의 의미",
    genre: "ballad",
  },
  {
    name: "너의 모든 순간",
    singer: "성시경",
    min: "4",
    max: "21",
    min_name: "0옥타브 파",
    max_name: "2옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=성시경+너의+모든+순간",
    image_name: "너의 모든 순간",
    genre: "ballad",
  },
  {
    name: "내 손을 잡아",
    singer: "아이유",
    min: "11",
    max: "24",
    min_name: "1옥타브 파",
    max_name: "3옥타브 미",
    youtube: "https://www.youtube.com/results?search_query=내+손을+잡아",
    image_name: "내 손을 잡아",
    genre: "ballad",
  },
  {
    name: "출발",
    singer: "김동률",
    min: "4",
    max: "16",
    min_name: "0옥타브 파",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=김동률+출발",
    image_name: "출발",
    genre: "ballad",
  },
  {
    name: "사랑합니다",
    singer: "팀",
    min: "8",
    max: "19",
    min_name: "1옥타브 도",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=팀+사랑합니다",
    image_name: "사랑합니다",
    genre: "ballad",
  },
  {
    name: "다행이다",
    singer: "이적",
    min: "7",
    max: "19",
    min_name: "0옥타브 시",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=이적+다행이다",
    image_name: "다행이다",
    genre: "ballad",
  },

  {
    name: "미리 메리 크리스마스",
    singer: "아이유",
    min: "11",
    max: "24",
    min_name: "1옥타브 파",
    max_name: "3옥타브 미",
    youtube: "https://www.youtube.com/results?search_query=미리+메리+크리스마스",
    image_name: "미리 메리 크리스마스",
    genre: "dance",
  },
  {
    name: "스물셋",
    singer: "아이유",
    min: "12",
    max: "24",
    min_name: "1옥타브 솔",
    max_name: "3옥타브 미",
    youtube: "https://www.youtube.com/results?search_query=아이유+스물셋",
    image_name: "스물셋",
    genre: "dance",
  },
  {
    name: "오늘부터 우리는",
    singer: "여자친구",
    min: "12",
    max: "26",
    min_name: "1옥타브 솔",
    max_name: "3옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=여자친구+오늘부터+우리는",
    image_name: "오늘부터 우리는",
    genre: "dance",
  },
  {
    name: "좋은 날",
    singer: "아이유",
    min: "14",
    max: "26",
    min_name: "1옥타브 시",
    max_name: "3옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=아이유+좋은+날",
    image_name: "좋은 날",
    genre: "dance",
  },
  {
    name: "ooh-ahh하게",
    singer: "트와이스",
    min: "11",
    max: "23",
    min_name: "1옥타브 파",
    max_name: "3옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=트와이스+우아하게",
    image_name: "ooh-ahh하게",
    genre: "dance",
  },
  {
    name: "너랑 나",
    singer: "아이유",
    min: "11",
    max: "25",
    min_name: "1옥타브 파",
    max_name: "3옥타브 파",
    youtube: "https://www.youtube.com/results?search_query=아이유+너랑+나",
    image_name: "너랑 나",
    genre: "dance",
  },
  {
    name: "비행기",
    singer: "거북이",
    min: "5",
    max: "27",
    min_name: "0옥타브 솔",
    max_name: "3옥타브 라",
    youtube: "https://www.youtube.com/results?search_query=거북이+비행기",
    image_name: "비행기",
    genre: "dance",
  },
  {
    name: "shake-it",
    singer: "씨스타",
    min: "13",
    max: "26",
    min_name: "1옥타브 라",
    max_name: "3옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=씨스타+shake+it",
    image_name: "shake-it",
    genre: "dance",
  },
  {
    name: "거짓말",
    singer: "빅뱅",
    min: "5",
    max: "16",
    min_name: "0옥타브 솔",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=빅뱅+거짓말",
    image_name: "거짓말",
    genre: "dance",
  },
  {
    name: "하루 끝",
    singer: "아이유",
    min: "12",
    max: "25",
    min_name: "1옥타브 솔",
    max_name: "3옥타브 파",
    youtube: "https://www.youtube.com/results?search_query=아이유+하루+끝",
    image_name: "하루 끝",
    genre: "dance",
  },
  {
    name: "I Don't Care",
    singer: "2NE1",
    min: "14",
    max: "24",
    min_name: "1옥타브 시",
    max_name: "3옥타브 미",
    youtube: "https://www.youtube.com/results?search_query=2NE1+I+Dont+Care",
    image_name: "i dont care",
    genre: "dance",
  },
  {
    name: "롤린(Rollin')",
    singer: "브레이브걸스",
    min: "14",
    max: "25",
    min_name: "1옥타브 시",
    max_name: "3옥타브 파",
    youtube: "https://www.youtube.com/results?search_query=브레이브걸스+롤린",
    image_name: "롤린",
    genre: "dance",
  },
  {
    name: "Next Level",
    singer: "에스파",
    min: "11",
    max: "24",
    min_name: "1옥타브 파",
    max_name: "3옥타브 미",
    youtube: "https://www.youtube.com/results?search_query=에스파+Next+Level",
    image_name: "next level",
    genre: "dance",
  },
  {
    name: "어땠을까",
    singer: "싸이,박정현",
    min: "14",
    max: "22",
    min_name: "1옥타브 시",
    max_name: "3옥타브 도",
    youtube: "https://www.youtube.com/results?search_query=싸이+어땠을까",
    image_name: "어땠을까",
    genre: "rap",
  },
  {
    name: "헤어지지 못하는 여자, 떠나가지 못하는 남자",
    singer: "리쌍,정인",
    min: "11",
    max: "28",
    min_name: "1옥타브 파",
    max_name: "3옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=헤어지지+못하는+여자+떠나가지+못하는+남자",
    image_name: "헤어지지 못하는 여자, 떠나가지 못하는 남자",
    genre: "rap",
  },
  {
    name: "한여름밤의 꿀",
    singer: "San E,레이나",
    min: "13",
    max: "23",
    min_name: "1옥타브 라",
    max_name: "3옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=산이+한여름밤의+꿀",
    image_name: "한여름밤의 꿀",
    genre: "rap",
  },
  {
    name: "y",
    singer: "프리스타일",
    min: "17",
    max: "25",
    min_name: "2옥타브 미",
    max_name: "3옥타브 파",
    youtube: "https://www.youtube.com/results?search_query=프리스타일+y",
    image_name: "y",
    genre: "rap",
  },
  {
    name: "자니",
    singer: "프라이머리",
    min: "6",
    max: "21",
    min_name: "0옥타브 라",
    max_name: "2옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=프라이머리+자니",
    image_name: "자니",
    genre: "rap",
  },
  {
    name: "죽일놈",
    singer: "다이나믹 듀오",
    min: "6",
    max: "14",
    min_name: "0옥타브 라",
    max_name: "1옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=다이나믹+듀오+죽일놈",
    image_name: "죽일놈",
    genre: "rap",
  },
  {
    name: "너에게 쓰는 편지",
    singer: "MC몽,린",
    min: "14",
    max: "23",
    min_name: "1옥타브 시",
    max_name: "3옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=MC몽+너에게+쓰는+편지",
    image_name: "너에게 쓰는 편지",
    genre: "rap",
  },
  {
    name: "the time goes on",
    singer: "BewhY",
    min: "8",
    max: "11",
    min_name: "1옥타브 도",
    max_name: "1옥타브 파",
    youtube: "https://www.youtube.com/results?search_query=비와이+the+time+goes+on",
    image_name: "the time goes on",
    genre: "rap",
  },
  {
    name: "그땐 그땐 그땐",
    singer: "영준,Supreme Team",
    min: "14",
    max: "19",
    min_name: "1옥타브 시",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=슈프림팀+그땐+그땐+그땐",
    image_name: "그땐 그땐 그땐",
    genre: "rap",
  },
  {
    name: "삐딱하게(Crooked)",
    singer: "G-DRAGON",
    min: "11",
    max: "24",
    min_name: "1옥타브 솔",
    max_name: "2옥타브 라",
    youtube: "https://www.youtube.com/results?search_query=지드래곤+삐딱하게",
    image_name: "삐딱하게",
    genre: "rap",
  },
  {
    name: "사이먼 도미닉",
    singer: "사이먼 도미닉",
    min: "9",
    max: "19",
    min_name: "1옥타브 레",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=사이먼+도미닉+사이먼+도미닉",
    image_name: "사이먼 도미닉",
    genre: "rap",
  },
  {
    name: "marry me",
    singer: "마크튭,구윤회",
    min: "7",
    max: "22",
    min_name: "0옥타브 시",
    max_name: "3옥타브 도",
    youtube: "https://www.youtube.com/results?search_query=마크튭+marry+me",
    image_name: "marry me",
    genre: "R&B",
  },
  {
    name: "바람기억",
    singer: "나얼",
    min: "3",
    max: "23",
    min_name: "0옥타브 미",
    max_name: "3옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=나얼+바람기억",
    image_name: "바람기억",
    genre: "R&B",
  },
  {
    name: "벌써일년",
    singer: "브라운 아이즈",
    min: "11",
    max: "22",
    min_name: "1옥타브 파",
    max_name: "3옥타브 도",
    youtube: "https://www.youtube.com/results?search_query=브라운+아이즈+벌써일년",
    image_name: "벌써일년",
    genre: "R&B",
  },
  {
    name: "내사람",
    singer: "SG워너비",
    min: "6",
    max: "21",
    min_name: "0옥타브 라",
    max_name: "2옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=SG워너비+내사람",
    image_name: "내사람",
    genre: "R&B",
  },
  {
    name: "친구라도 될 걸 그랬어",
    singer: "거미",
    min: "17",
    max: "28",
    min_name: "2옥타브 미",
    max_name: "3옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=거미+친구라도+될+걸+그랬어",
    image_name: "친구라도 될 걸 그랬어",
    genre: "R&B",
  },
  {
    name: "oasis",
    singer: "Crush",
    min: "9",
    max: "20",
    min_name: "1옥타브 레",
    max_name: "2옥타브 라",
    youtube: "https://www.youtube.com/results?search_query=크러쉬+oasis",
    image_name: "oasis",
    genre: "R&B",
  },
  {
    name: "사랑했잖아",
    singer: "린",
    min: "18",
    max: "28",
    min_name: "2옥타브 파",
    max_name: "3옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=린+사랑했잖아",
    image_name: "사랑했잖아",
    genre: "R&B",
  },
  {
    name: "가끔",
    singer: "Crush",
    min: "9",
    max: "21",
    min_name: "1옥타브 레",
    max_name: "2옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=크러쉬+가끔",
    image_name: "가끔",
    genre: "R&B",
  },
  {
    name: "같은 시간 속의 너",
    singer: "나얼",
    min: "5",
    max: "23",
    min_name: "0옥타브 솔",
    max_name: "3옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=나얼+같은+시간+속의+너",
    image_name: "같은 시간 속의 너",
    genre: "R&B",
  },
  {
    name: "우주를 건너",
    singer: "백예린",
    min: "12",
    max: "24",
    min_name: "1옥타브 솔",
    max_name: "3옥타브 미",
    youtube: "https://www.youtube.com/results?search_query=백예린+우주를+건너",
    image_name: "우주를 건너",
    genre: "R&B",
  },
  {
    name: "양화대교",
    singer: "Zion.T",
    min: "11",
    max: "18",
    min_name: "1옥타브 파",
    max_name: "2옥타브 파",
    youtube: "https://www.youtube.com/results?search_query=자이언티+양화대교",
    image_name: "양화대교",
    genre: "R&B",
  },
  {
    name: "사랑...그 놈",
    singer: "바비킴",
    min: "6",
    max: "19",
    min_name: "0옥타브 라",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=바비킴+사랑...그+놈",
    image_name: "사랑...그 놈",
    genre: "R&B",
  },
  {
    name: "TOMBOY",
    singer: "혁오",
    min: "11",
    max: "20",
    min_name: "1옥타브 파",
    max_name: "2옥타브 라",
    youtube: "https://www.youtube.com/results?search_query=혁오+TOMBOY",
    image_name: "tomboy",
    genre: "R&B",
  },
  {
    name: "오래된 노래",
    singer: "스탠딩 에그",
    min: "8",
    max: "21",
    min_name: "1옥타브 도",
    max_name: "2옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=스탠딩+에그+오래된+노래",
    image_name: "오래된 노래",
    genre: "indi",
  },
  {
    name: "안아줘",
    singer: "정준일",
    min: "5",
    max: "19",
    min_name: "0옥타브 솔",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=정준일+안아줘",
    image_name: "안아줘",
    genre: "indi",
  },
  {
    name: "스토커",
    singer: "10cm",
    min: "8",
    max: "19",
    min_name: "0옥타브 도",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=10cm+스토커",
    image_name: "스토커",
    genre: "indi",
  },
  {
    name: "겨울을 걷는다",
    singer: "윤딴딴",
    min: "7",
    max: "19",
    min_name: "0옥타브 시",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=윤딴딴+겨울을+걷는다",
    image_name: "겨울을 걷는다",
    genre: "indi",
  },
  {
    name: "madeleine love",
    singer: "CHEEZE",
    min: "14",
    max: "26",
    min_name: "1옥타브 시",
    max_name: "3옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=cheeze+madeleine+love",
    image_name: "madeleine love",
    genre: "indi",
  },
  {
    name: "위잉위잉",
    singer: "혁오",
    min: "8",
    max: "20",
    min_name: "1옥타브 도",
    max_name: "2옥타브 라",
    youtube: "https://www.youtube.com/results?search_query=혁오+위잉위잉",
    image_name: "위잉위잉",
    genre: "indi",
  },
  {
    name: "널 생각해",
    singer: "원 모어 찬스",
    min: "9",
    max: "21",
    min_name: "1옥타브 레",
    max_name: "2옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=원+모어+찬스+널+생각해",
    image_name: "널 생각해",
    genre: "indi",
  },
  {
    name: "고백",
    singer: "정준일",
    min: "5",
    max: "19",
    min_name: "0옥타브 솔",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=정준일+고백",
    image_name: "고백",
    genre: "indi",
  },
  {
    name: "사랑은 은하수 다방에서",
    singer: "10cm",
    min: "11",
    max: "19",
    min_name: "1옥타브 파",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=사랑은+은하수+다방에서",
    image_name: "사랑은 은하수 다방에서",
    genre: "indi",
  },
  {
    name: "little star",
    singer: "스탠딩 에그",
    min: "8",
    max: "21",
    min_name: "1옥타브 도",
    max_name: "2옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=스탠딩+에그+little+star",
    image_name: "little star",
    genre: "indi",
  },
  {
    name: "자취방에서",
    singer: "윤딴딴",
    min: "6",
    max: "16",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=윤딴딴+자취방+다방에서",
    image_name: "자취방에서",
    genre: "indi",
  },
  {
    name: "남은 기억",
    singer: "윤딴딴",
    min: "5",
    max: "18",
    min_name: "0옥타브 솔",
    max_name: "2옥타브 파",
    youtube: "https://www.youtube.com/results?search_query=윤딴딴+남은+기억",
    image_name: "남은 기억",
    genre: "indi",
  },
  {
    name: "벚꽃엔딩",
    singer: "버스커 버스커",
    min: "8",
    max: "20",
    min_name: "1옥타브 도",
    max_name: "2옥타브 라",
    youtube: "https://www.youtube.com/results?search_query=벚꽃엔딩",
    image_name: "벚꽃엔딩",
    genre: "rock",
  },
  {
    name: "기억을 걷는 시간",
    singer: "넬",
    min: "11",
    max: "22",
    min_name: "1옥타브 파",
    max_name: "3옥타브 도",
    youtube: "https://www.youtube.com/results?search_query=기억을+걷는+시간",
    image_name: "기억을 걷는 시간",
    genre: "rock",
  },
  {
    name: "남자를 몰라",
    singer: "버즈",
    min: "12",
    max: "20",
    min_name: "1옥타브 솔",
    max_name: "2옥타브 라",
    youtube: "https://www.youtube.com/results?search_query=버즈+남자를+몰라",
    image_name: "남자를 몰라",
    genre: "rock",
  },
  {
    name: "응급실",
    singer: "izi",
    min: "7",
    max: "21",
    min_name: "0옥타브 시",
    max_name: "2옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=izi+응급실",
    image_name: "응급실",
    genre: "rock",
  },
  {
    name: "여수 밤바다",
    singer: "버스커 버스커",
    min: "8",
    max: "18",
    min_name: "1옥타브 도",
    max_name: "2옥타브 파",
    youtube: "https://www.youtube.com/results?search_query=버스커버스커+여수+밤바다",
    image_name: "여수 밤바다",
    genre: "rock",
  },
  {
    name: "사랑했나봐",
    singer: "윤도현",
    min: "8",
    max: "20",
    min_name: "1옥타브 도",
    max_name: "2옥타브 라",
    youtube: "https://www.youtube.com/results?search_query=윤도현+사랑했나봐",
    image_name: "사랑했나봐",
    genre: "rock",
  },
  {
    name: "겁쟁이",
    singer: "버즈",
    min: "12",
    max: "20",
    min_name: "1옥타브 솔",
    max_name: "2옥타브 라",
    youtube: "https://www.youtube.com/results?search_query=버즈+겁쟁이",
    image_name: "겁쟁이",
    genre: "rock",
  },
  {
    name: "나에게로 떠나는 여행",
    singer: "버즈",
    min: "12",
    max: "20",
    min_name: "1옥타브 솔",
    max_name: "2옥타브 라",
    youtube: "https://www.youtube.com/results?search_query=버즈+나에게로+떠나는+여행",
    image_name: "나에게로 떠나는 여행",
    genre: "rock",
  },
  {
    name: "꽃송이가",
    singer: "버스커버스커",
    min: "11",
    max: "19",
    min_name: "1옥타브 파",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=꽃송이가",
    image_name: "꽃송이가",
    genre: "rock",
  },
  {
    name: "never ending story",
    singer: "부활",
    min: "9",
    max: "21",
    min_name: "1옥타브 레",
    max_name: "2옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=부활+never+ending+story",
    image_name: "never ending story",
    genre: "rock",
  },
  {
    name: "비밀번호 486",
    singer: "윤하",
    min: "15",
    max: "24",
    min_name: "2옥타브 도",
    max_name: "3옥타브 미",
    youtube: "https://www.youtube.com/results?search_query=윤하+비밀번호+486",
    image_name: "비밀번호 486",
    genre: "rock",
  },
  {
    name: "첫사랑",
    singer: "버스커버스커",
    min: "5",
    max: "19",
    min_name: "0옥타브 솔",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=버스커+버스커+첫사랑",
    image_name: "첫사랑",
    genre: "rock",
  },
  {
    name: "일상으로의 초대",
    singer: "신해철",
    min: "5",
    max: "18",
    min_name: "0옥타브 솔",
    max_name: "2옥타브 미",
    youtube: "https://www.youtube.com/results?search_query=신해철+일상으로의+초대",
    image_name: "일상으로의 초대",
    genre: "rock",
  },
  {
    name: "초혼",
    singer: "장윤정",
    min: "20",
    max: "28",
    min_name: "2옥타브 라",
    max_name: "3옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=초혼",
    image_name: "초혼",
    genre: "trot",
  },
  {
    name: "사랑아",
    singer: "장윤정",
    min: "13",
    max: "25",
    min_name: "1옥타브 라",
    max_name: "3옥타브 파",
    youtube: "https://www.youtube.com/results?search_query=장윤정+사랑아",
    image_name: "사랑아",
    genre: "trot",
  },
  {
    name: "안동역에서",
    singer: "진성",
    min: "10",
    max: "20",
    min_name: "1옥타브 미",
    max_name: "2옥타브 라",
    youtube: "https://www.youtube.com/results?search_query=안동역에서",
    image_name: "안동역에서",
    genre: "trot",
  },
  {
    name: "꽃",
    singer: "장윤정",
    min: "15",
    max: "24",
    min_name: "2옥타브 도",
    max_name: "3옥타브 미",
    youtube: "https://www.youtube.com/results?search_query=장윤정+꽃",
    image_name: "꽃",
    genre: "trot",
  },
  {
    name: "보릿고개",
    singer: "진성",
    min: "10",
    max: "20",
    min_name: "1옥타브 미",
    max_name: "2옥타브 라",
    youtube: "https://www.youtube.com/results?search_query=진성+보릿고개",
    image_name: "보릿고개",
    genre: "trot",
  },
  {
    name: "당신이 좋아",
    singer: "장윤정",
    min: "6",
    max: "19",
    min_name: "0옥타브 라",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=당신이+좋아",
    image_name: "당신이 좋아",
    genre: "trot",
  },
  {
    name: "내 사랑",
    singer: "홍진영",
    min: "15",
    max: "23",
    min_name: "2옥타브 도",
    max_name: "3옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=홍진영+내+사랑",
    image_name: "내 사랑",
    genre: "trot",
  },
  {
    name: "어머나",
    singer: "장윤정",
    min: "16",
    max: "22",
    min_name: "2옥타브 레",
    max_name: "3옥타브 도",
    youtube: "https://www.youtube.com/results?search_query=어머나",
    image_name: "어머나",
    genre: "trot",
  },
  {
    name: "시계바늘",
    singer: "신유",
    min: "8",
    max: "19",
    min_name: "1옥타브 도",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=신유+시계바늘",
    image_name: "시계바늘",
    genre: "trot",
  },
  {
    name: "천태만상",
    singer: "윤수현",
    min: "13",
    max: "21",
    min_name: "1옥타브 라",
    max_name: "2옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=천태만상",
    image_name: "천태만상",
    genre: "trot",
  },
  {
    name: "미운 사랑",
    singer: "전미령",
    min: "16",
    max: "28",
    min_name: "2옥타브 레",
    max_name: "3옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=전미령+미운+사랑",
    image_name: "미운 사랑",
    genre: "trot",
  },
  {
    name: "둥지",
    singer: "남진",
    min: "8",
    max: "18",
    min_name: "1옥타브 도",
    max_name: "2옥타브 파",
    youtube: "https://www.youtube.com/results?search_query=남진+둥지",
    image_name: "둥지",
    genre: "trot",
  },
  {
    name: "내 나이가 어때서",
    singer: "오승근",
    min: "6",
    max: "19",
    min_name: "0옥타브 라",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=내+나이가+어때서",
    image_name: "내 나이가 어때서",
    genre: "trot",
  },
  {
    name: "오라버니",
    singer: "금잔디",
    min: "19",
    max: "29",
    min_name: "2옥타브 솔",
    max_name: "4옥타브 도",
    youtube: "https://www.youtube.com/results?search_query=오라버니",
    image_name: "오라버니",
    genre: "trot",
  },
  {
    name: "짠짜라",
    singer: "장윤정",
    min: "13",
    max: "23",
    min_name: "1옥타브 라",
    max_name: "3옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=짠짜라",
    image_name: "짠짜라",
    genre: "trot",
  },
  {
    name: "사랑찾아 인생찾아",
    singer: "조항조",
    min: "6",
    max: "18",
    min_name: "0옥타브 라",
    max_name: "2옥타브 미",
    youtube: "https://www.youtube.com/results?search_query=조항조+사랑찾아+인생찾아",
    image_name: "사랑찾아 인생찾아",
    genre: "trot",
  },
  {
    name: "사랑",
    singer: "나훈아",
    min: "9",
    max: "15",
    min_name: "1옥타브 레",
    max_name: "2옥타브 도",
    youtube: "https://www.youtube.com/results?search_query=나훈아+사랑",
    image_name: "사랑",
    genre: "trot",
  },
  {
    name: "오빠야",
    singer: "신현희와 김루트",
    min: "14",
    max: "28",
    min_name: "1옥타브 시",
    max_name: "3옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=신현희와+김루트+오빠야",
    image_name: "오빠야",
    genre: "fork",
  },
  {
    name: "마음",
    singer: "아이유",
    min: "14",
    max: "28",
    min_name: "1옥타브 시",
    max_name: "3옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=아이유+마음",
    image_name: "마음",
    genre: "fork",
  },
  {
    name: "200%",
    singer: "악동뮤지션",
    min: "13",
    max: "24",
    min_name: "1옥타브 라",
    max_name: "3옥타브 미",
    youtube: "https://www.youtube.com/results?search_query=악동뮤지션+200퍼센트",
    image_name: "200%",
    genre: "fork",
  },
  {
    name: "청춘",
    singer: "김필",
    min: "8",
    max: "16",
    min_name: "1옥타브 도",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=김필+청춘",
    image_name: "청춘",
    genre: "fork",
  },
  {
    name: "give love",
    singer: "악동뮤지션",
    min: "8",
    max: "23",
    min_name: "1옥타브 도",
    max_name: "3옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=악동뮤지션+give+love",
    image_name: "give love",
    genre: "fork",
  },
  {
    name: "그대와 나 설레임",
    singer: "어쿠스틱 콜라보",
    min: "11",
    max: "23",
    min_name: "1옥타브 파",
    max_name: "3옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=어쿠스틱+콜라보+그대와+나+설레임",
    image_name: "그대와 나 설레임",
    genre: "fork",
  },
  {
    name: "너 사용법",
    singer: "에디킴",
    min: "6",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "3옥타브 도",
    youtube: "https://www.youtube.com/results?search_query=에디킴+너+사용법",
    image_name: "너 사용법",
    genre: "fork",
  },
  {
    name: "애상",
    singer: "10cm",
    min: "7",
    max: "19",
    min_name: "0옥타브 시",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=10cm+애상",
    image_name: "애상",
    genre: "fork",
  }, 

  {
    name: "너에게 난 나에게 넌",
    singer: "자전거 탄 풍경",
    min: "9",
    max: "19",
    min_name: "1옥타브 레",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=자전거+탄+풍경+너에게+난+나에게+넌",
    image_name: "너에게 난 나에게 넌",
    genre: "fork",
  },
  {
    name: "잊어야 한다는 마음으로",
    singer: "김광석",
    min: "9",
    max: "16",
    min_name: "1옥타브 레",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=김광석+잊어야+한다는+마음으로",
    image_name: "잊어야 한다는 마음으로",
    genre: "fork",
  },
]

btn.addEventListener("click", service2);
function service2(){
  // special.innerHTML = "나의 최저음정: " + myMin.value +" / 나의 최고 음정: " + myMax.value;
  const myMinCompare = parseInt(myMin.value);
  const myMaxCompare = parseInt(myMax.value);
  for (let index = 0; index < totalSongList.length; index++) {
    const element = totalSongList[index];
    if(element.name === chosenSong.value){//이름 일치하면
      //노래의 음정 출력(숫자로)
      normal.innerHTML = `노래의 최저음정: ${element.min_name} / 노래의 최고 음정: ${element.max_name}`;
      //당신이 선택한 노래는 (가수)의 (제목)입니다.
      wantSong.innerHTML = `당신이 부르고 싶은 노래는 <strong>${element.singer}</strong>의 <strong>${element.name}</strong>입니다.`;
      //부를수 있는지 없는지 판정
      element.min = parseInt(element.min);
      element.max = parseInt(element.max);
      if(myMinCompare <= element.min && myMaxCompare >= element.max){
        resultBoolean.innerText = "당신은 이 노래를 충분히 소화할 수 있습니다!";
        resultDetail.innerText = resultDetail.innerText = "당신의 실력을 보여주세요.";
      }
      else{
        resultBoolean.innerText = "아쉽게도 당신은 이 노래를 소화하기 어렵습니다.";
        if(myMinCompare > element.min){
          resultDetail.innerHTML = `이 노래를 소화하기 위해서는 <strong>${(myMinCompare - element.min)}키 더 높여서</strong> 불러야 합니다.`;
        }
        if(myMaxCompare < element.max){
          resultDetail.innerHTML = `이 노래를 소화하기 위해서는 <strong>${(element.max - myMaxCompare)}키 더 낮춰서</strong> 불러야 합니다.`;
        }
        if(myMinCompare > element.min && myMaxCompare < element.max){
          resultDetail.innerHTML = `이 노래를 소화하기 위해서는 고음 기준으로, ${(element.max - myMaxCompare)}키 더 낮춰서</strong> 불러야 합니다.`;
        }
      }
    }
  }
};

function MovetoResult(seq){
  var offset = $("." + seq).offset();
  $('html, body').animate({scrollTop : offset.top - 100}, 100);
}