import React from "react";

import TestView from "./test.view";

export function Test() {
    const onClick = () => {
        console.log("クリックされた");
    };

    return <TestView onClick={onClick} />;
}

export default Test;
