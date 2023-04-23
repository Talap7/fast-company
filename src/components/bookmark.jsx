import React from "react";
import PropTypes from "prop-types";

export const Bookmark = ({ state }) => {
    if (state) {
        return <><i className="bi bi-bookmark-heart-fill"></i></>;
    }

    if (!state) {
        return <><i className="bi bi-bookmark"></i></>;
    }
};

Bookmark.propTypes = {
    state: PropTypes.bool.isRequired
};
