import React from "react";
import {useParams} from "react-router-dom";

export default function User() {
	const {username} = useParams();

	return <div>User: {username ? username : "_not_found_"}</div>;
}
