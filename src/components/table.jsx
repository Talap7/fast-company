import React from "react";
import PropTypes from "prop-types";
import { TableHead } from "./tableHead";
import { TableBody } from "./tableBody";

export const Table = ({ columns, onSort, selectedSort, data }) => {
    return <table className="table">
        <TableHead columns={columns} onSort={onSort} selectedSort={selectedSort} />
        <TableBody {...{ columns, data }} />
    </table>;
};

Table.propTypes = {
    columns: PropTypes.object,
    onSort: PropTypes.func,
    selectedSort: PropTypes.object,
    data: PropTypes.array
};
