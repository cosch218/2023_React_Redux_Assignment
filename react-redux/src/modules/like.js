// 액션 함수, 리듀서 함수 작성 공간


// 초기값 설정
const initialState = [
  {
    memoid: 3,
    content: "하트를 누르면 즐겨찾기로 따로 값이 저장됩니다",
    date: "2023-05-15"
  }
];


// 액션 생성 함수
export const clickLikeBtn = (memo) => ({ type: "CLICK_LIKE_BTN", payload:memo });


// 리듀서 함수
function like( state = initialState, action ) {
  switch(action.type) {
    case "CLICK_LIKE_BTN":
      /** CLICK_LIKE_BTN 에서 해야할 일
       * 1. initialState에 해당 memoid(action.payload)가 없다면 ? >> initialState에 해당 memoid를 가진 객체를 추가
       * 2. initialState에 해당 memoid(action.payload)가 있다면 ? >> initialState에 해당 memoid를 가진 객체를 제거
       */
      const targetMemo = action.payload;
      if (state.find((memo)=>(memo.memoid === targetMemo.memoid))) {
        const newLikeList = state.filter((memo)=>(memo.memoid !== targetMemo.memoid))
        return newLikeList;
      } else {
        const newLikeList = state.concat(targetMemo);
        return newLikeList;
      }
    
    default:
      return state;
  }
}


export default like;