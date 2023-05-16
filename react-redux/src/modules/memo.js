// 액션 함수, 리듀서 함수 작성 공간


/** memo.js
 * 1. 메모 추가
 * 2. 메모 삭제
 * state : [], memoid, content, date
 * action : "ADD_MEMO", "DELETE_MEMO"
 */


// 초기값 설정
const initialState = [
  {
    memoid: 1,
    content: "메모입니다",
    date: "2023년05월15일"
  },
  {
    memoid: 2,
    content: "간단한 기록을 남길 수 있는 메모입니다",
    date: "2023년05월15일"
  },
  {
    memoid: 3,
    content: "☆을 누르면 즐겨찾기로 따로 값이 저장됩니다",
    date: "2023년05월15일"
  }
];


// memoid 변수
let memoid = 4;


// 액션 생성 함수
export const addMemo = (memo) => ({ type:"ADD_MEMO", payload:memo });
export const deleteMemo = (memoid) => ({ type:"DELETE_MEMO", payload:memoid });


function memo( state = initialState, action ) {
  switch(action.type) {
    case "ADD_MEMO":
      const newMemo = {
        ...action.payload,
        memoid: memoid
      };
      memoid++;
      const newMemoList = state.concat(newMemo);
      return newMemoList;

    case "DELETE_MEMO":
      const deleteMemoList = state.filter((m)=>(m.memoid !== action.payload));
      return deleteMemoList;
    
    default:
      return state;
  }
};


export default memo;