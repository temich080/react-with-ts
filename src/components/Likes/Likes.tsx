import React, {useState} from 'react';
import LikesView from "./LikesView";

const Likes = () => {
    let [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }
    const decrement = () => {
        setCount(count-1);
    }
    return (
        <LikesView
            count={count}
            increment={increment}
            decrement={decrement}
        />
    );
};

export default Likes;