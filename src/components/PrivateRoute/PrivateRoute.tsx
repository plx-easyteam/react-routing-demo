import React from "react";
import {Navigate} from "react-router-dom";

function PrivateRoute(props: {children: React.ReactNode}) {
	return false ? <>{props.children}</> : <Navigate to="/unauthorized" />;
}

export default PrivateRoute;
