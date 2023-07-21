import './App.css';
import AddVideo from './components/AddVideo';
import Video from './components/Video';
import Obj from './data/Data';
import { useState } from 'react';
function App() {
  const [videos, setVideos] = useState(Obj);
  function handleClick(){
    setVideos([...videos,{
      id: videos.length+1,
      video_name: "Another Tutorial", 
      channel: "TakeUforward",
      verified: true
    } ])
  }
  return (
    <div className="App">
      <AddVideo></AddVideo>
      {/* <button onClick={handleClick}>Add</button> */}
      <div className='App-header'>
        <div className='row'>
          {
            videos.map(element=><Video
              key={element.id}
              {...element}
            >
            </Video>)
          }
        </div>
        <div className='row'>
          {/* the below buttons  */}
        {/* <PlayButton message="play-msg" onClick={(message)=>console.log(message)}>Play</PlayButton>
        <PlayButton message="pause-msg" onClick={(message)=>alert(message)}>Pause</PlayButton> */}

        {/* we need to reduce the code */}
        {/* <PlayButton onPause={()=>alert("Paused")} onPlay={()=>alert("Playing")}></PlayButton> */}
        </div>
        </div>
    </div>
  );
}


export default App;
