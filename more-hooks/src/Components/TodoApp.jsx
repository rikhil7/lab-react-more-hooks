import React, { useReducer, useRef } from 'react'
import TodoItem from './TodoItem';
// import './App.css'
import '../index.css'


const initialState = [
    {
        data: "First Item",
        isHidden: false
    }
]

const todoReducer = (state,action)=>{
    console.log("action: ", action);
    if(action.type == "ADD_ITEM"){
        return [
            ...state,{
                data: action.payload,
                isHidden: false
            }
        ]
    }
    if(action.type=="CHANGE_ISHIDDEN"){
        return state.map((e,i)=>{
            return i == action.payload ? {...e, isHidden: !e.isHidden} :e
        })
    }

    return state
}


const ToDoApp = () => {

    const [todo , dispatch] = useReducer(todoReducer , initialState)
    console.log("todo: ", todo);

    const input = useRef(null)

return (
    <div className='todo' >
        <input ref={input} type="text" onKeyDown={(e)=>{
            if(e.key=="Enter"){
                dispatch({type: "ADD_ITEM",payload: e.target.value})
            }
        }}/>
        {todo.map((e,i)=>{
            return <TodoItem item={e} index={i} dispatch={dispatch}/>
        })}
        <button onClick={()=>{
            input.current.focus()
            // window.scrollTo(top:0,behaviour:)
        }}>GO BACK TO TOP</button>
    </div>
    )
}

export default ToDoApp