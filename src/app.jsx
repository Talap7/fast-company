import React, { useState, useEffect } from "react";
import api from "../src/api";
import { Users } from "../src/components/users";
import { Route, Switch, Link } from "react-router-dom";
import Login from "./layouts/login";
import Main from "./layouts/main";
import UserPage from "./components/userPage";

export const App = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        api.users.fetchAll().then(data => setUsers(data));
    }, []);

    const handleDelete = (userId) => {
        const filtered = users.filter((user) => user._id !== userId);
        setUsers(filtered);
    };

    const handleToggleBookmark = (id) => {
        setUsers((prevUsers) => {
            return prevUsers.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            });
        });
    };

    return (
        <>
            {<div>
                <span style={{ marginRight: 10 }}> <Link to="/">Main</Link></span>
                <span style={{ marginRight: 10 }}> <Link to="/login">Login</Link></span>
                <span> <Link to="/users">Users</Link></span>
            </div>}

            {
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/login" component={Login} />
                    <Route path="/users/:userId" component={ UserPage } />
                    <Route path="/users" exact render={() => (users
                        ? <Users
                            users={users}
                            onDelete={handleDelete}
                            onToggle={handleToggleBookmark}
                        />
                        : <h1>Loading...</h1>)} />
                </Switch>
            }
        </>
    );
};
