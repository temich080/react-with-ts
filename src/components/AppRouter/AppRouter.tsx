import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Posts from "../../pages/Posts";
import Post from "../../pages/Post";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Users from "../Users/Users";
import Hooks from "../../pages/Hooks";

const AppRouter = () => {
    const isAuth = true;
    return (
        <Switch>
            {/*{routes.map((route) =>*/}
            {/*    <Route key={route.path} exact={route.exact} path={route.path}>*/}
            {/*        {route.component}*/}
            {/*    </Route>*/}
            {/*)}*/}
            {isAuth
                ?
                <>
                    <Route exact={true} path={"/"}>
                        <Home/>
                    </Route>
                    <Route exact={true} path={"/hooks"}>
                        <Hooks/>
                    </Route>
                    <Route exact={true} path={"/posts"}>
                        <Posts/>
                    </Route>
                    <Route exact={true} path={"/posts/:id"}>
                        <Post/>
                    </Route>
                    <Route exact={true} path={"/users"}>
                        <Users/>
                    </Route>
                    <Route exact={true} path={"/login"}>
                        <Login/>
                    </Route>
                    <Redirect to={"/"}/>
                </>
                :
                <>
                    <Route exact={true} path={"/login"}>
                        <Login/>
                    </Route>
                    <Redirect to={"/login"}/>
                </>
            }
        </Switch>

    );
};

export default AppRouter;