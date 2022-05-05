import axios from "axios";
import {IComment, IPost} from "../types/types";

export default class PostService {
    static async getAllPosts(limit = 10, page = 1) {
        const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts/', {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return response;
    }

    static async getPostById(id: string | number) {
        const response = await axios.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response;
    }

    static async getCommentsById (id: string | number) {
        const response = await axios.get<IComment[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        return response;
    }
}
