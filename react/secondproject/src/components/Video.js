import Counter from "./Counter";
import PlayButton from "./PlayButton";

function Video({channel, video_name, verified=false, id, children}) {
    // props.bgc = "red"
    return(
         <>
         <div className="col-2">
    <img className="thumbnail"
    src={`https://picsum.photos/id/${id}/200/300.jpg`}
    alt="Katherine Johnson"/>
    <p className="vd_name">{video_name}</p>
    <p className="channel_name">{channel} {verified && '✅'}</p>
    <PlayButton onPause={()=>alert("Paused")} onPlay={()=>alert("Playing")}></PlayButton>
    <Counter></Counter>
    </div>
         </>  
    )
}
export default Video;
// 