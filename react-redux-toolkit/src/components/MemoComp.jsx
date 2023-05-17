import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addMemo, deleteMemo, likeMemoRedux, likeMemoToolkit } from '../slices/memoSlice';
import { toggleLike } from '../slices/likeMemoSlice';


export default function MemoComp() {
  const memolist = useSelector((state)=>(state.memo));
  const likeMemolist = useSelector((state)=>(state.likeMemo));

  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  // memolist 중에서 filter를 이용해 isLike가 true인 것만 추출해 따로 배열 만들기
  const likeMemo = memolist.filter((memo)=>(memo.isLike))

  return (
    <div>
      <h2>메모장</h2>
      <input 
        type="text" 
        value={input}
        onChange={(e)=>{setInput(e.target.value)}}
      />
      <button
        onClick={()=>{dispatch(addMemo(input))}}
      >
        추가
      </button>
      {
        memolist.map((memo, index)=>(
          <div key={memo.id}>
            <h3>{memo.text}</h3>
            <span>{memo.date}</span>
            <button onClick={()=>{dispatch(likeMemoRedux(memo.id))}}>{memo.isLike ? "찜완료" : "찜하기"}</button>
            <button onClick={()=>{dispatch(likeMemoToolkit({index:index, memo:memo}))}}>{memo.isLike ? "찜완료" : "찜하기"}</button>
            <button onClick={()=>{dispatch(toggleLike(memo))}}>
              {likeMemolist.find((likeMemo)=>(likeMemo.id === memo.id)) ? "♥" : "♡"}
            </button>
            <button onClick={()=>{dispatch(deleteMemo(index))}}>X</button>
          </div>
        ))
      }
      <hr />
      <h3>likeMemo로 확인</h3>
      {
        likeMemolist.map((memo)=>(
          <h4 key={memo.id}>{memo.text}</h4>
        ))
      }
      <hr />
      <h3>즐겨찾기</h3>
      {
        likeMemo.map((memo)=>(
          <h4 key={memo.id}>{memo.text}</h4>
        ))
      }
    </div>
  )
}
