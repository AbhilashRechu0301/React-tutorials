import { useContext } from "react";
import VideoContext from "./VideoContext";


function VideoPlayer(){

    const data = useContext(VideoContext)
    return(
        <div>
            <h1>Video player component</h1>
            {data}
        </div>
    );
}
export default VideoPlayer;