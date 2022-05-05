import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Post from "../pages/Post";

export const routes = [
    {path: "/", component: Home, exact: true},
    {path: "/posts", component: Posts, exact: true},
    {path: "/posts/:id", component: Post, exact: true}
]