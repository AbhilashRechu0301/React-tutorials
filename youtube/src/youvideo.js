function Youvideo(props) {

    console.log(props);
    if (props.selectedvideo == null ){

        return(
            <div>
                <h1>Loading....</h1>
            </div>
        )
    }
    else{

        var URL = `https://www.youtube.com/embed/${props.selectedvideo.id.videoId}`
    return(

        
        <div>
            <h1>In youtube video component</h1>
            <iframe width="800" height="345" src={URL}>
            </iframe>
        </div>
    )}
}
export default Youvideo;