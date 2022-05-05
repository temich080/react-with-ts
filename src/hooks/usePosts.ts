import {useMemo} from 'react';
import {IPost} from "../types/types";
// import {Post} from "../components/PostList/PostList";

export const useSortedPosts = (posts: any, sort: any) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            // Для сортировки строк используем ф-ию localeCompare
            return [...posts].sort((a: any, b: any) => {
                return a[sort].localeCompare(b[sort])
            });
        }
        return posts;
    }, [sort, posts]);
    return sortedPosts;
}

export const usePosts = (posts: IPost[], sort: string, query: string) => {
    const sortedPosts = useSortedPosts(posts, sort);

    const searchedAndSortedPosts = useMemo(() => {
        return sortedPosts.filter(({body}: any) => body.includes(query));
    }, [query, sortedPosts]);
    return searchedAndSortedPosts;
}
