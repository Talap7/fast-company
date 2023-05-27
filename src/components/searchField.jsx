import React from "react";
import PropTypes from "prop-types";

const SearchField = ({ name, value, onChange }) => {
    return <form>
        <input
            name={name}
            type="text"
            className="mb-4"
            style={{ width: "100%" }}
            onChange={onChange}
            value={value}
        />
    </form>;
};

export default SearchField;

SearchField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};
