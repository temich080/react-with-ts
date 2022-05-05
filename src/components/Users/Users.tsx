import React, {useEffect, useState} from 'react';
import {useFetching} from "../../hooks/useFetching";
import axios from "axios";
import s from "./Users.module.css";
import {List} from "antd";
import ListUI from "../UI/List/List";

interface IUsersAPI {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}

const Users = () => {
    const [users, setUsers] = useState<IUsersAPI[]>([]);
    const [fetchingUsers, isLoading, error] = useFetching(async () => {
        let response = await axios.get<IUsersAPI[]>('https://jsonplaceholder.typicode.com/users/');
        setUsers(response.data);
    });

    useEffect(() => {
        fetchingUsers();
    }, []);

    return (
        <div className={s.items}>
            {/*{users.map((user) => <div key={user.id} className={s.item}>*/}
            {/*    <div className={s.username}>*/}
            {/*        {user.username}*/}
            {/*    </div>*/}
            {/*    <div className={s.id}>*/}
            {/*        {user.id}*/}
            {/*    </div>*/}
            {/*    <div className={s.email}>*/}
            {/*        {user.email}*/}
            {/*    </div>*/}
            {/*</div>)}*/}
            <List
                dataSource={users}
                renderItem={(item) => (
                    <List.Item key={item.id}>
                        <div>{item.username}</div>
                        <div>Content</div>
                    </List.Item>
                )}
            />
            <ListUI
                dataSource={users}
                renderItem={(item) => (
                    <List.Item key={item.id}>
                        <div>{item.username}</div>
                        <div>Content</div>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default Users;