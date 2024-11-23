"use client";

import React from "react";

function Page() {
    const handleClick = () => {
        console.log("クリックされた");
    };

    return (
        <div>
            <h1>テストページ</h1>
            <h2>ヘッダーテスト</h2>
            <h3>ヘッダーテスト</h3>
            <h4>ヘッダーテスト</h4>
            <h5>ヘッダーテスト</h5>
            <h6>ヘッダーテスト</h6>
            <h2>ボタンテスト</h2>
            <button onClick={handleClick}>ボタンテスト</button>
        </div>
    );
}

export default Page;
