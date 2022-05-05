import React from 'react';
import {Spin} from 'antd';
import {useHistory} from 'react-router-dom';
import {IPost} from "../../types/types";

const PostList = ({posts, isLoading, remove}: {posts: IPost[], isLoading: boolean, remove: any}) => {
    const router = useHistory();

    if (isLoading) {
        return <Spin/>
    }

    if (!posts.length) {
        return <div>
            <h1 style={{textAlign: 'center'}}>Постов не найдено!</h1>
        </div>
    }

    return (
        <div key={''}>
            <h1 style={{textAlign: "center"}}>Мои посты:</h1>
            {posts.map(p =>
                <div key={p.id} style={{border: '2px solid blue', marginBottom: '10px'}}>
                    <div>id: {p.id}</div>
                    <div>Text: {p.title}</div>
                    <div>Text: {p.body}</div>
                    {/*<Link to={`/posts/${p.id}`}>*/}
                    {/*</Link>*/}
                    <button onClick={(e) => {
                        e.preventDefault();
                        router.push(`/posts/${p.id}`)
                    }}>Открыть</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        remove(p);
                    }}>УДАЛИТЬ ПОСТ</button>
                </div>
            )}
        </div>
    );
};

export default PostList;