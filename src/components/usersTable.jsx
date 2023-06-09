import React from "react";
import PropTypes from "prop-types";
import { Bookmark } from "./bookmark";
import { QualitiesList } from "./qualitiesList";
import { Table } from "./table";

export const UsersTable = ({ users, onSort, selectedSort, onToggle, onDelete }) => {
    const columns = {
        name: { path: "name", name: "Имя" },
        qualities: { name: "Качества", component: (user) => <QualitiesList qualities={user.qualities} /> },
        professions: { path: "profession.name", name: "Профессия" },
        completedMeetings: { path: "completedMeetings", name: "Встретился, раз" },
        rate: { path: "rate", name: "Оценка" },
        bookmark: { path: "bookmark", name: "Избранное", component: (user) => (<button onClick={() => onToggle(user._id)}><Bookmark state={user.bookmark} /></button>) },
        delete: {
            component: (user) => (<button
                className="btn btn-danger btn-sm m-2"
                onClick={() => onDelete(user._id)}
            >
                Delete
            </button>
            )
        }
    };

    return (
        <Table columns={columns} onSort={onSort} selectedSort={selectedSort} data={users} />
    );
};

UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired
};
