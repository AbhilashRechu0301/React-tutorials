import { useContext } from "react";
import VideosContext from "./VideosContext";

function VideoList (props){

    const videos = useContext(VideosContext);

    const renderList = () => {
        // code to return a map of video items in an ul. 
        

    const invokeVideo = (videos)=>{
         props.onSelectvideo(videos);
       }
        
        var list = videos.map(videos => {
            return <li onClick = {()=>invokeVideo(videos) } key = {videos.snippet.thumbnails.default.url}><img src={videos.snippet.thumbnails.default.url}></img></li>
        })
        return list;
    }
    //console.log(props)
    return (

        <div>
        <h1> I am in Video list component</h1>
         {videos.length}
         <ul>{renderList()}</ul>
    
        </div>
    );
}
export default VideoList;