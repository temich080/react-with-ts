import React, {useEffect, useState} from 'react';
import {useFetching} from "../../hooks/useFetching";
import TodoService from "../../API/TodoService";

const Todos = () => {
    const [limit, setLimit] = useState<number>(10);
    const [page, setPage] = useState<number>(1);
    const [todos, setTodos] = useState<any>([]);
    const [fetchPosts, isLoading, error] = useFetching(async () => {
        const response = await TodoService.getAllTodos(limit, page);
        setTodos(response.data);
    });

    useEffect(() => {
        fetchPosts();
    }, []);

    const items = todos.map((todo: any) => <div style={{padding: '20px 0', border: '1px solid black'}}>{todo.title}</div>);

    return (
        <div style={{margin: 40}}>
            {items}
        </div>
    );
};

export default Todos;