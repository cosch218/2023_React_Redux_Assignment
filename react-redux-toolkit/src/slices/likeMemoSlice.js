import { createSlice } from '@reduxjs/toolkit'

export const likeMemoSlice = createSlice({
  name: "likeMemo",
  initialState: [
    {
      id: 2,
      text: "두번째 메모입니다",
      date: "2023-05-17",
      isLike: true
    }
  ],
  reducers: {
    toggleLike: (state, action) => {
      // 버튼을 클릭했을 때 값이 있다면 삭제, 없다면 추가
      // action.payload : memo
      if (state.find((like)=>(like.id === action.payload.id))) {
        return state.filter((like)=>(like.id !== action.payload.id))
      } else {
        state.push(action.payload);
      }
    }
  }
})

export const { toggleLike } = likeMemoSlice.actions;
export default likeMemoSlice.reducer;