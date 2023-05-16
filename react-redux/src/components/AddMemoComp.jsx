import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addMemo } from '../modules/memo';

export default function AddMemoComp() {
  const dispatch = useDispatch();
  const [inputMemo, setInputMemo] = useState("");

  const date = new Date();
  const YYYY = String(date.getFullYear()).padStart(4, "0");
  const MM = String(date.getMonth()+1).padStart(2,"0");
  const DD = String(date.getDate()).padStart(2,"0");

  const onAddMemo = (e) => {
    e.preventDefault();
    dispatch( addMemo(
      {
        content: inputMemo,
        date: `${YYYY}-${MM}-${DD}`
      }
    ) );
    setInputMemo("");
  }

  return (
    <div>
      <form 
        action=""
        onSubmit={ onAddMemo }
      >
        <input 
          type="text"
          onChange={(e)=>{setInputMemo(e.target.value)}}
          value={inputMemo}
        />
        <button type="submit">추가</button>
      </form>
    </div>
  )
}
