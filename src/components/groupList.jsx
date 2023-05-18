import React from "react";
import PropTypes from "prop-types";

export const GroupList = ({ items, valueProperty, contentProperty, onItemSelect, selectedProf }) => {
    return (
        <>
            <ul className="list-group">
                {
                    Array.isArray(items)
                        ? items.map(item => {
                            return (<li
                                key={item[valueProperty]}
                                className={"list-group-item" + (item === selectedProf ? " active" : "")}
                                onClick={() => onItemSelect(item)}
                                role="button">
                                {item[contentProperty]}
                            </li>);
                        })
                        : Object.keys(items).map(item => (
                            <li
                                key={items[item][valueProperty]}
                                className={"list-group-item" + (items[item] === selectedProf ? " active" : "")}
                                onClick={() => onItemSelect(items[item])}
                                role="button">
                                {items[item][contentProperty]}
                            </li>))
                }
            </ul>
        </>
    );
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func.isRequired,
    selectedProf: PropTypes.object
};
