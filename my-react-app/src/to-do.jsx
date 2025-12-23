import { useEffect, useState } from "react"

const ToDoList =()=>{
    const [todo, setTodo] = useState([])
    const [text, setText] = useState("")
    function handleAdd(){
        setTodo([...todo,text])
        setText("")
    }
    useEffect(()=>{
        // open the browser console and you should be able to see the below log.
        // add some text in the placeholder and see whether the log updates
        console.log("new text: ",text)
    },[])
    // in the above useEffect we see that the dependency array is blank. 
    // blank dependency array means that the useEffect will run only once during the initial render
    // try to add some dependency and see what happens. how can we get the log to be displayed
    // also read about what happens if we dont give the dependency array at all
    return(
        <>
        <input value={text} onChange={(e)=>setText(e.target.value)}></input>
        <button onClick={()=>handleAdd()}>Add</button>
        <ul>
        {
            todo.map((obj,index)=>(
                <li key={index}>{obj}</li>
            )
            )
        }
        </ul>
        </>
    )
}
export default ToDoList