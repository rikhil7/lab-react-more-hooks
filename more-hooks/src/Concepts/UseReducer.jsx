import React, { useReducer, useState } from "react";

const initValue = 0;
const reducer = (state,action)=>{
    console.log("action: ", action);
    console.log("state: ", state);
    let {type} = action

    if(type="INCREASE"){
        return state+1
    }

    if(type="DECREASE"){
        return state-1
    }
    return state
}

const UseReducer = () => {
//   const [count, setCount] = useState(0);

const [count, dispatch] = useReducer(reducer,initValue)

//   const increaseCount =()=>{
//     setCount(count+1)
//   }
//   const decreaseCount =()=>{
//     setCount(count-1)
//   }

return (
    <>
        <div> u s e R E D U C E R </div>
        <h2>Count: {count}</h2>
        <button onClick={()=> dispatch({type:"INCREASE"})}>+</button>
        <button onClick={()=> dispatch({type:"DECREASE"})}>-</button>
    </>
    );
};

export default UseReducer;