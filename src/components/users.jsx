import React, { useState, useEffect } from "react";
import { Pagination } from "./pagination";
import { paginate } from "../utils/paginate";
import api from "../api";
import PropTypes from "prop-types";
import { GroupList } from "./groupList";
import { SearchStatus } from "./searchStatus";
import { UsersTable } from "./usersTable";
import _ from "lodash";
import SearchField from "./searchField";
import { searchInput } from "../utils/searchInput";

export const Users = ({ users, onDelete, onToggle }) => {
    const pageSize = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });
    const [searchData, setSearchData] = useState({ searchValue: "" });
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
        setSearchData({ searchValue: "" });
    };

    useEffect(() => {
        api.professions.fetchAll().then(data => setProfessions(data));
    });

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handleClearFilter = () => {
        setSelectedProf();
        setSearchData({ searchValue: "" });
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    const handleChangeSearch = ({ target }) => {
        setSearchData({ searchValue: target.value });
        setSelectedProf();
    };

    const searchedUsers = searchInput(searchData.searchValue, users);
    console.log(searchedUsers);

    const filteredUsers = selectedProf ? users.filter(user => user.profession._id === selectedProf._id) : users;
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
    const userCrop = searchedUsers || paginate(sortedUsers, currentPage, pageSize);
    const count = searchedUsers.length || filteredUsers.length;

    if (users) {
        return (
            <div className="d-flex">
                {professions && (
                    <div className="d-flex flex-column me-2 mt-1">
                        <GroupList
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                            selectedProf={selectedProf}
                        />
                        <button className="btn btn-secondary mt-2" onClick={handleClearFilter}>Очистить</button>
                    </div>)
                }
                <div className="d-flex flex-column">
                    <SearchStatus length={count} />
                    <SearchField name={ "searchInput" } value={searchData.searchValue} onChange={handleChangeSearch} />
                    <UsersTable users={userCrop } onSort={handleSort} selectedSort={sortBy} onDelete={onDelete} onToggle={onToggle} />
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            currentPage={currentPage}
                            pageSize={pageSize}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        );
    };
    return "loading...";
};

Users.propTypes = {
    users: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired
};
