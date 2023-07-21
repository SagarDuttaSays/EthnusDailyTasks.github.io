import { useState } from 'react';
import './AddVideo.css'

function AddVideo(){
    const [video, setVideo] = useState({id: 1, verified: true});
    function onHandle(){

    }
    function handleChange(e){
        e.stopPropagation();
        // console.log(e.target.name, e.target.value);
        setVideo({...video, 
            [e.target.name]: e.target.value
        })
        console.log(video);
    }
    return(
    <>
    <form className='form'>
        <div className='form-group'>
        <input type='text' name='video_name' onChange={handleChange} placeholder='Enter the Video Title'/>
        <input type='text' name='channel' onChange={handleChange} placeholder='Enter the Video Title'/>
        <button></button>
        </div>
    </form>
    </>
)}

export default AddVideo;