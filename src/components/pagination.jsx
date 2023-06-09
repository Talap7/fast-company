import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

export const Pagination = ({
    itemsCount,
    pageSize,
    onPageChange,
    currentPage
}) => {
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    return (
        <>
            <nav>
                <ul className="pagination">
                    {pages.map((page) => (
                        <li
                            className={
                                "page-item " +
                                (page === currentPage ? "active" : "")
                            }
                            key={"page_" + page}
                            onClick={() => onPageChange(page)}
                        >
                            <a className="page-link">{page}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};
