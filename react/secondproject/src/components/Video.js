function Video({country, bgc}) {
    // props.bgc = "red"
    return(
        <div>
            <h2 style={{color: bgc}}>Hello {country}</h2>
            <img 
            src="https://i.imgur.com/MK3eW3As.jpg"
            alt="Katherine Johnson"/>
        </div>
    )
}
export default Video;
// 