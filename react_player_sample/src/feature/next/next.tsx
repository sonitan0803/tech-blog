import React from "react";
import ReactPlayer from "react-player";

function Next() {
    return (
        <div>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=DAlRoOaPc_k&ab_channel=S4U%2F%E3%81%97%E3%82%82%E3%82%84%E3%81%8B"
                playing={true}
                controls={true}
            />
        </div>
    );
}

export default Next;
