import React from 'react';

interface IProps {
    count: number;
    increment: any;
    decrement: any;
}

const styleBtn = {
    padding: '20px',
    background: '#CCCCCC',
    cursor: 'pointer',
    'user-select': 'none'
}

const LikesView = (props: IProps) => {
    const {count, increment, decrement} = props;

    return (
        <div>
            <div>Likes: {count}</div>
            <div style={styleBtn} onClick={increment}>LIKE 👍</div>
            <div style={styleBtn} onClick={decrement}>DISLIKE 👎</div>
        </div>
    );
};

export default LikesView;