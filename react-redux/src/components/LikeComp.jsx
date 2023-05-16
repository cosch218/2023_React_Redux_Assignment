import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { clickLikeBtn } from '../modules/like';
import { deleteMemo } from '../modules/memo';

export default function LikeComp() {
  const memo = useSelector((state)=>(state.memo));
  const like = useSelector((state)=>(state.like));
  const dispatch = useDispatch();
  return (
    <div className='contentbox'>
      {
        like.map((m)=>(
          <div key={m.memoid} className='likebox'>
            <button
              onClick={ () => { dispatch( clickLikeBtn(m) ) } }
            >
              {
                // like에 해당 memoid(action.payload = m.memoid)가 있다면 ? >> ★
                // like에 해당 memoid(action.payload = m.memoid)가 없다면 ? >> ☆
                like.find((likememo)=>(likememo.memoid === m.memoid)) ? "★" : "☆"
              }
            </button>
            <div className='content'>
              <h3>{m.content}</h3>
              <span>{m.date}</span>
            </div>
          </div>
        ))
      }
    </div>
  )
}
