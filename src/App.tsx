import React from "react";
import "./App.css";
import {useRoutes} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import User from "./components/User/User";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Unauthorized from "./components/Unauthorized/Unauthorized";
import Layout from "./components/Layout/Layout";

function App() {
	const home = <Home />;
	const AppRoutes = () =>
		useRoutes([
			{path: "/", element: home},
			{path: "/home", element: home},
			{path: "/login", element: <Login />},
			{
				path: "/user",
				element: (
					<PrivateRoute>
						<User />
					</PrivateRoute>
				),
			},
			{
				path: "/user/:username",
				element: <User />,
			},
			{
				path: "/unauthorized",
				element: <Unauthorized />,
			},
		]);

	return (
		<Layout>
			<AppRoutes />
		</Layout>
	);

	// return (
	// 	<Routes>
	// 		<Route path="/login" element={<Login />} />
	// 		<Route
	// 			path="/user"
	// 			element={
	// 				<PrivateRoute>
	// 					<User />
	// 				</PrivateRoute>
	// 			}
	// 		/>
	// 		<Route path="/user/:username" element={<User />} />
	// 		<Route path="/unauthorized" element={<Unauthorized />} />
	// 	</Routes>
	// );
}

export default App;
