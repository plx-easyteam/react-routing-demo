import React from "react";
import {NavLink} from "react-router-dom";

function Layout(props: {children: React.ReactNode}) {
	return (
		<div className="App">
			<h3>Routing Demo App</h3>

			{/* <ul style={{display: "flex", gap: "5px", listStyle: "none"}}> */}
			<ul>
				<li>
					<NavLink to={"/"}>Home</NavLink>
				</li>
				<li>
					<NavLink to={"/user"}>User</NavLink>
				</li>
				<li>
					<NavLink to={"/login"}>Login</NavLink>
				</li>
			</ul>

			<section>{props.children}</section>
		</div>
	);
}

export default Layout;
