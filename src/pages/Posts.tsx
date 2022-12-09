import React, {useEffect, useState} from 'react';
import ButtonUI from "../components/UI/button/ButtonUI";
import FilterPosts from "../components/FilterPosts/FilterPosts";
import Pagination from "../components/Pagination/Pagination";
import PostList from "../components/PostList";
import Modal from "../components/Modal/Modal";
import PostForm from "../components/Form/PostForm";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {IPost} from "../types/types";

const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [isModalOpen, setIsModalOpen] = useState(false)
    const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalCount, setTotalCount] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    // const isLoading=false;
    const [fetchPosts, isLoading, error] = useFetching(async () => {
        const response = await PostService.getAllPosts(limit, page);
        const count = response.headers['x-total-count']
        // @ts-ignore
        setTotalCount(count);
        setPosts(response.data);
    });

    useEffect(() => {
        // @ts-ignore
        fetchPosts();
    }, [page]);

    const createPost = (newPost: any) => {
        setPosts([
            ...posts,
            newPost
        ]);
        setIsModalOpen(false);
    }

    const removePost = (post: IPost) => {
        setPosts(posts.filter((p) => post.id !== p.id))
    }

    return (
        <>
            {/*<Likes/>*/}
            {/*<ClassCounter/>*/}

            <ButtonUI onClick={() => setIsModalOpen(true)}>
                Добавить пост
            </ButtonUI>
            <FilterPosts filter={filter} setFilter={setFilter}/>
            {error && <div>Произошла ошибка: {error}</div>}
            <Pagination
                page={page}
                setPage={setPage}
                totalCount={totalCount}
                setTotalCount={setTotalCount}
                limit={limit}
            />

            {(isLoading=== true || isLoading === false) &&
                <PostList posts={searchedAndSortedPosts} isLoading={isLoading} remove={removePost}/>
            }
            <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
                <PostForm create={createPost}/>
            </Modal>
        </>
    );
};

export default Posts;