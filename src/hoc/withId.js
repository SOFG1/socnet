import React from "react";
import { useParams } from "react-router-dom";

const withId = (Component) => {
    const WithId = (props)=> {
        let id = useParams()['*'];
        id = id ? parseInt(id, 10) : null
        return <Component {...props} urlId={id} />;
    }
    return WithId;
};

export default withId;
