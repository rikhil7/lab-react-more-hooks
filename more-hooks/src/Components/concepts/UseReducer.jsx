import React, { useReducer, useState } from 'react'

export default function UseReducer() {
    // const [count,setCount] = useState(0)

    const reducer = (state,action)=>{
        console.log("state:",state)
        console.log("action:",action)

        let {type} = action
        if(type=="increase"){
            return state+1
        }
        if(type=="decrease"){
            return state-1
        }
        return state
    }

    const initValue = 0

    const [count, dispatch] = useReducer(reducer,initValue)

  return (
    <div>
        <h1>useReducer</h1>
        <button onClick={()=>{
            // setCount(count-1)
            dispatch({type:"decrease"})
        }}>-</button>
        <h2>{count}</h2>
        <button onClick={()=>{
            // setCount(count+1)
            dispatch({type:"increase"})
        }}>+</button>
    </div>
  )
}
