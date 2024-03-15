import React from 'react'
import '../App.css'


const TodoItem = ({item: {data,isHidden} ,index,dispatch}) => {
    console.log("isHidden: ", isHidden);
return (
    <div className='todoItem' style={{
        borderRadius:"10px",
        backgroundColor: "blue",
        filter: `${isHidden?"blur(2px)":"blur(0px)"}`
    }}>
        <h3>{isHidden ? "This Content is Hidden": data}</h3>
        <button onClick={()=>{
            dispatch({type: "CHANGE_ISHIDDEN" , payload: index})
        }}>Toggle</button>
    </div>
    )
}

export default TodoItem
