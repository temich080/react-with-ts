import axios from "axios";
import {IComment, IPost} from "../types/types";

export default class TodoService {
    static async getAllTodos(limit = 10, page = 1) {
        const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/todos/', {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return response;
    }

    static async getTodoById(id: string | number) {
        const response = await axios.get<IPost>(`https://jsonplaceholder.typicode.com/todos/${id}`);
        return response;
    }
}
