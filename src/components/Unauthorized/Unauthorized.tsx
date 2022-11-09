import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export default function Unauthorized() {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");

	function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
		setUsername(e.currentTarget.value.replace(" ", "").trim());
	}

	return (
		<>
			<div>
				<div>Unauthorized: Acces Denied !</div>
				<div>
					<input
						type="text"
						id="username"
						placeholder="username"
						onChange={(e) => handleInput(e)}
						value={username}
					/>
					<Link to={username ? "/user/" + username : "#"}>Visit User {username}</Link>
				</div>
				<button
					onClick={() => {
						navigate("/home");
					}}
				>
					Go Back home
				</button>
			</div>
		</>
	);
}
