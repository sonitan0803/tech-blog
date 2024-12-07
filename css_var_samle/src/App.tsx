import "./App.css";

function App() {
    return (
        <div
            style={{
                width: "100vw",
                height: "100dvh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div style={{ width: "50%", height: "50%", display: "flex" }}>
                <div
                    className="main-container1"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "25%",
                    }}
                >
                    <div className="text1">コンテナ1</div>
                </div>
                <div
                    className="main-container2"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "25%",
                    }}
                >
                    <div className="text2">コンテナ2</div>
                </div>
                <div
                    className="main-container3"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "25%",
                    }}
                >
                    {" "}
                    <div className="text3">コンテナ3</div>
                </div>
            </div>
            <div style={{ width: "50%", height: "50%", display: "flex" }}>
                <div
                    className="main-container4"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "25%",
                    }}
                >
                    {" "}
                    <div className="text4">コンテナ4</div>
                </div>
                <div
                    className="main-container5"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "25%",
                    }}
                >
                    {" "}
                    <div className="text5">コンテナ5</div>
                </div>
                <div
                    className="main-container6"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "25%",
                    }}
                >
                    {" "}
                    <div className="text6">コンテナ6</div>
                </div>
            </div>
        </div>
    );
}

export default App;
