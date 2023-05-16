import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addMemo, deleteMemo } from '../modules/memo';
import { clickLikeBtn } from '../modules/like';

export default function MemoComp() {
  const memo = useSelector((state)=>(state.memo));
  const like = useSelector((state)=>(state.like));
  const dispatch = useDispatch();

  

  return (
    <div className='contentbox'>
      {
        memo.map((m)=>(
          <div key={m.memoid} className='memobox'>
            <button
              onClick={ () => { dispatch( clickLikeBtn(m) ) } }
            >
              {
                // like에 해당 memoid(action.payload = m.memoid)가 있다면 ? >> ★
                // like에 해당 memoid(action.payload = m.memoid)가 없다면 ? >> ☆
                like.find((likememo)=>(likememo.memoid === m.memoid)) ? "★" : "☆"
              }
            </button>
            <div className='memocontent'>
              <h3>{m.content}</h3>
              <span>{m.date}</span>
            </div>
            <button
              onClick={ () => { dispatch( deleteMemo(m.memoid) ) } }
            >
              X
            </button>
          </div>
        ))
      }
    </div>
  )
}
