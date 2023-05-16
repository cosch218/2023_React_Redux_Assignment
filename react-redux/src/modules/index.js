// 작성한 리듀서 모듈들을 하나로 묶어서 작성
import { combineReducers } from 'redux';


// 작성한 리듀서 가져오기
import memo from './memo';
import like from './like';


// 작성한 리듀서들을 ','로 나열하여 객체로 묶어서 내보냄
const rootReducer = combineReducers({ memo, like });


export default rootReducer;