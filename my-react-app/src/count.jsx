import { useState } from "react"
import './Styles.css'
const Count =()=>{
    const [count, setCount] = useState(0)
    const handleCount =()=>{
        setCount(count+1)
    }
return (
    <>
    <p>Count : {count}</p>
    <button className="btn" onClick={handleCount}>Increase</button>
    </>
    
)
}
export default Count