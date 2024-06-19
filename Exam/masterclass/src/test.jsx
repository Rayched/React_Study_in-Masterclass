import { useState } from "react";

function test(){
    const [counter, setCounter] = useState("");

    setCounter("Hello");
    setCounter(10);
    setCounter(true);

    return (
        <div>Hello World</div>
    );
}

export default test;