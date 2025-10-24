"use client";

import { useState } from "react";
import { useCounter } from "./store";

export default function Home() {
  const [inputVal , setInputVal] = useState(0)
  const count = useCounter((state)=> state.count)
  const status = useCounter(state => state.status)
  const increse = useCounter((state)=> state.increse)
  const decrease = useCounter((state)=> state.decrease)
  const reset = useCounter((state)=> state.reset)
  const newAss = useCounter((state)=> state.newAss)
  return (
    <>
      <div className="container h-svh flex justify-center items-center">
        <div className="counter-container border border-white shadow-white shadow-sm p-5 flex flex-col items-center gap-5 rounded-lg">
          <h1 className="display text-7xl text-white text-shadow-white">{count}<sub className="text-xs">{status}</sub></h1>
          <div className="btn-container flex gap-3">
            <button onClick={increse} className="border border-green-500 py-1 px-3 cursor-pointer rounded-md shadow-green-500 shadow-md">
              +
            </button>
            <button onClick={reset} className="border border-white py-1 px-3 cursor-pointer rounded-md shadow-white shadow-md">
              reset
            </button>
            <button onClick={decrease} className="border border-red-500 py-1 px-3 cursor-pointer rounded-md shadow-red-500 shadow-md">
              -
            </button>
          </div>
          <div className="assign flex flex-col items-center gap-5 mt-5">
            <input value={inputVal} onChange={(e)=>setInputVal(e.target.value)} type="text" className="border border-white rounded-md p-1 outline-none" />
            <button onClick={()=> newAss(inputVal)} className="border border-pink-500 py-1 px-2 rounded-md shadow-pink-500 shadow-md">
              assign
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
