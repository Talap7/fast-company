import React from "react";
import PropTypes from "prop-types";

export const TableHead = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort(selectedSort => ({ ...selectedSort, order: selectedSort.order === "asc" ? "desc" : "asc" }));
        } else {
            onSort({ path: item, order: "asc" });
        }
    };

    const addArrow = (selectedSort, currentPath) => {
        if (selectedSort.path === currentPath) {
            if (selectedSort.order === "asc") {
                return <i className="bi bi-caret-down-fill"></i>;
            } else {
                return <i className="bi bi-caret-up-fill"></i>;
            }
        }
    };

    return (
        <thead>
            <tr>
                {Object.keys(columns).map(column => (<th
                    role={columns[column].path ? "button" : ""}
                    key={column}
                    onClick={columns[column].path ? () => handleSort(columns[column].path) : undefined}
                >
                    {<>
                        {columns[column].name}
                        {addArrow(selectedSort, columns[column].path)}
                    </>
                    }
                </th>))}
            </tr>
        </thead>
    );
};

TableHead.propTypes = {
    columns: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired
};
