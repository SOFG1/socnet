import React from "react";
import { useParams } from "react-router-dom";

const withUserId = (Component) => {
    const WithUserId = (props)=> {
        let id = useParams()['*'];
        if (id !== "") {
            id = parseInt(id, 10)
        }
        return <Component {...props} userId={id} />;
    }
    return WithUserId;
};

export default withUserId;
