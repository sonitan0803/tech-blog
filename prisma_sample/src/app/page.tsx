"use client";

import axios from "axios";

export default function Home() {
    const createProject = async () => {
        try {
            const response = await axios.post("/api/createProject", {
                category: "哺乳類",
                details: [
                    {
                        title: "人間",
                    },
                    {
                        title: "イルカ",
                    },
                ],
            });
            console.log("成功", response.data);
        } catch (error) {
            console.log("エラー", error);
        }
    };

    return (
        <div>
            <button onClick={createProject}>aaa</button>
        </div>
    );
}
