import React from 'react';
import { useHistory } from 'react-router-dom';
import { Spin } from 'antd';

import { IProps } from "./types";

import styles from './styles.module.scss';

const PostList:React.FC<IProps> = ({posts, isLoading, remove}) => {
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
        <div key={''} className={styles.list}>
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

PostList.defaultProps = {
    posts: [],
    remove: () => null,
    isLoading: false,
}

export default PostList;