import React from "react";
import Contact from "../components/Contacts/Contact";
import NavBar from "../components/NavBar/NavBar";
import "./styles/ContactsPage.css";

const ContactsPage = () => {
	return (
		<div className="contact">
			<NavBar />
			<Contact />
		</div>
	);
};

export default ContactsPage;
