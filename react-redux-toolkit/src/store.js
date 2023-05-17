// 리덕스 툴킷을 이용하여 리듀서 파일 모으는 공간
import { configureStore } from '@reduxjs/toolkit';


import memoSlice from './slices/memoSlice';
import likeMemoSlice from './slices/likeMemoSlice';


export default configureStore({
  reducer: {
    memo: memoSlice,
    likeMemo: likeMemoSlice
  },
})