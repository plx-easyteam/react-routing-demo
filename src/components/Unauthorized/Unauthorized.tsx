import React from "react";
import {useNavigate} from "react-router-dom";

export default function Unauthorized() {
	const navigate = useNavigate();

	return (
		<>
			<div style={{display: "flex"}}>
				<div>Unauthorized: Acces Denied !</div>
				<button
					onClick={() => {
						navigate("/home");
					}}
				>
					Back home
				</button>
			</div>
		</>
	);
}
