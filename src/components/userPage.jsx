import React, { useState, useEffect } from "react";
import api from "../api/fake.api/user.api";
import { Quality } from "./quality";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const UserPage = () => {
    const params = useParams();
    const { userId } = params;
    const [oneUser, setOneUser] = useState();
    useEffect(() => {
        api.getById(userId).then(data => setOneUser(data));
    }, []);
    return <>{
        oneUser
            ? <div>
                <h2>{oneUser.name}</h2>
                <h2>{oneUser.profession.name}</h2>
                <h3>{oneUser.qualities.map((quality) => (
                    <Quality key={quality._id} {...quality} />
                ))}</h3>
                <h3>{"Completed Meeteing: " + oneUser.completedMeetings}</h3>
                <h1>{"Rate:" + oneUser.rate}</h1>
                <Link to="/users"><button>Все пользователи</button></Link>
            </div>
            : <h2>Loading...</h2>}

    </>;
};

export default UserPage;
