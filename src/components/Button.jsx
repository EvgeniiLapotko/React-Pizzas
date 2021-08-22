import React from "react";
import classname from "classnames";
import { Link } from "react-router-dom";

const Button = ({ className, children }) => {
    return (
        <Link to="/cart">
            <button className={classname("button", className)}>
                {children}
            </button>
        </Link>
    );
};

export default Button;
