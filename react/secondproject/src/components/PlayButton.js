import { useState } from "react";

function PlayButton({onPlay, onPause}){
    const [flag, setFlag] = useState(false);
    function handleClick(e){
        e.stopPropagation();
        if(flag) {
            onPlay()
        } else {
            onPause()
        }
        setFlag(!flag)
    }
    return(
        // <button className="btn" onClick={handleClick}>{children}</button>
        <p onClick={handleClick} >{(flag)?"▶️":"⏸️"}</p>
    )
}
export default PlayButton;