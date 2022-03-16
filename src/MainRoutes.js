import React from "react";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import AuthPage from "./pages/AuthPage";
import ContactsPage from "./pages/ContactsPage";
import AdminPage from "./pages/AdminPage";
import EditRentCarPage from "./pages/EditRentCarPage";
import RentCarPage from "./pages/RentCarPage";
import { Route, Routes } from "react-router-dom";
import { ADMIN } from "./consts";
import { useAuth } from "./contexts/AuthContexts";

const MainRoutes = () => {
	const { user } = useAuth();

	const PUBLIC_ROUTES = [
		{
			link: "/",
			element: <HomePage />,
			id: 1,
		},
		{
			link: "/about",
			element: <AboutUsPage />,
			id: 2,
		},
		{
			link: "/auth",
			element: <AuthPage />,
			id: 3,
		},
		{
			link: "/contact",
			element: <ContactsPage />,
			id: 4,
		},
		{
			link: "/rents",
			element: <RentCarPage />,
			id: 5,
		},
	];

	const PRIVATE_ROUTES = [
		{
			link: "/admin",
			element: <AdminPage />,
			id: 1,
		},
		{
			link: "/edit/:id",
			element: <EditRentCarPage />,
			id: 2,
		},
	];
	return (
		<>
			<Routes>
				{PUBLIC_ROUTES.map((item) => (
					<Route path={item.link} element={item.element} />
				))}
				{user
					? PRIVATE_ROUTES.map((item) => (
							<Route
								path={item.link}
								element={user.email == ADMIN ? item.element : null}
							/>
					  ))
					: null}
			</Routes>
		</>
	);
};

export default MainRoutes;
