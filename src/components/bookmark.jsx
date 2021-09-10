import React from "react";
import PropTypes from "prop-types";
const BookMark = ({ onToggleBookMark, status, id }) => {
    return (
        <button
            className="btn btn-lg"
            onClick={() => {
                onToggleBookMark(id);
            }}
        >
            {
                <i
                    className={
                        status ? "bi bi-bookmark-fill" : "bi bi-bookmark"
                    }
                ></i>
            }
        </button>
    );
};
BookMark.propTypes = {
    onToggleBookMark: PropTypes.func.isRequired,
    status: PropTypes.bool,
    id: PropTypes.string.isRequired
};
export default BookMark;
