import React from "react";
import PropTypes from "prop-types";

export const Quality = ({ _id, color, name }) => {
    return (
        <span key={_id} className={"badge m-2 bg-" + color}>
            {name}
        </span>
    );
};

Quality.propTypes = {
    _id: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};
