import React from "react";

const NoMatch = (props) => {
    console.log(props);
    return (
        <div>
            <h2
                className="error-404"
                style={{
                    color: "red",
                }}
            >
                404!
            </h2>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
};

export default NoMatch;
