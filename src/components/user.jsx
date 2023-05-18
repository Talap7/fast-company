import React from "react";
import { Quality } from "./quality";
import { Bookmark } from "./bookmark";
import PropTypes from "prop-types";

export const User = ({ user, onDelete, onToggle }) => {
    return (
        <>
            <tr key={user._id}>
                <th scope="row">{user.name}</th>
                <td scope="row">
                    {user.qualities.map((quality) => (
                        <Quality key={quality._id} {...quality} />
                    ))}
                </td>
                <td scope="row"> {user.profession.name}</td>
                <td scope="row">{user.completedMeetings}</td>
                <td scope="row">{user.rate}</td>
                <td scope="row">
                    <button onClick={() => onToggle(user._id)}>
                        <Bookmark state={user.bookmark} />
                    </button>
                </td>
                <td>
                    <button
                        className="btn btn-danger btn-sm m-2"
                        onClick={() => onDelete(user._id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        </>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired
};
