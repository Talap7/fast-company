import React, { useState } from "react";
import { User } from "./user";
import { Pagination } from "./pagination";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";

export const Users = ({ users, onDelete, onToggle }) => {
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(users, currentPage, pageSize);

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col">Избранное</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {userCrop.map((user) => (
                        <User
                            key={user._id}
                            user={user}
                            onDelete={onDelete}
                            onToggle={onToggle}
                        />
                    ))}
                </tbody>
            </table>
            <Pagination
                itemsCount={users.length}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={handlePageChange}
            />
        </>
    );
};

Users.propTypes = {
    users: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired
};
