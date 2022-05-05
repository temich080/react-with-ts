import React, {useEffect, useState} from 'react';
import {
    useParams
} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {isEmpty} from "lodash";

const Post = () => {
    const params = useParams<{id: string}>();
    const [post, setPost] = useState<{title: string}>({title: ''});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const postRes = await PostService.getPostById(params.id);
        setPost(postRes.data);
    });

    const [fetchCommentsById, isComLoading, comError] = useFetching(async (id: any) => {
        const postRes = await PostService.getCommentsById(params.id);
        // @ts-ignore
        setComments(postRes.data);
    });

    useEffect(() => {
        // @ts-ignore
        fetchPostById();
        // @ts-ignore
        fetchCommentsById();
    }, [])

    return (
        <div>
            {isLoading && <div>ЗАГРУЗКА</div>}
            {error && <div>ОШИБКА: {error}</div>}
            {!isEmpty(post) && post.title}

            <h2>Комментарии</h2>
            {isComLoading && <div>ЗАГРУЗКА коментариев</div>}
            {error && <div>ОШИБКА: {error}</div>}
            {
                // console.log(comments)
                comments.length < 0
                    ? 'нет комментариев'
                    : 'есть комментарии'
            }
        </div>
    );
};

export default Post;