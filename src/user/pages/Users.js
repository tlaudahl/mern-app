import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
	const USERS = [
		{
			id: 0,
			name: "Travis",
			image:
				"https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
			places: 3,
		},
	];
	return <UsersList items={USERS} />;
};

export default Users;
