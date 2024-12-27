import React from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=GITejNICpsE&list=PLuW3Jekzopslcs33niAJpbirS-apakm0N&ab_channel=S4U%2F%E3%81%97%E3%82%82%E3%82%84%E3%81%8B"
                playing={true}
                controls={true}
            />
            <ReactPlayer
                url="https://www.youtube.com/watch?v=DAlRoOaPc_k&ab_channel=S4U%2F%E3%81%97%E3%82%82%E3%82%84%E3%81%8B"
                light={true}
                onClickPreview={() => {
                    navigate("/next");
                }}
            />
        </div>
    );
}

export default Home;
