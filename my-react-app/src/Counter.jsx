import React, { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    const incrementCount = () =>{
        setCount(count+1);
    }
    const decrementCount = () =>{
        setCount(count-1);
    }
    const resetCount = () =>{
        setCount(0);
    }

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
}
export default Counter