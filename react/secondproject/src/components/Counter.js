import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(false);
    function handleClick(){
        setCount(!count);
    }
    const liked = <p>❤️</p>
    const unLiked = <p style={{fontWeight:"bold"}}>♡</p>
    return(
        <>
        <p style={{cursor:"pointer"}} onClick={handleClick}>{(count)?liked:unLiked}</p>
        </>
    )
}
export default Counter;