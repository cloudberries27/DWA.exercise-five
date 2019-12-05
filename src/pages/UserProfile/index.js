import React from "react";
import UserInformation from "../../components/UserProfileComponents/index";

export default function UserProfile({ user }){
	return (
		<div>
			<h1>Welcome to your Profile</h1>
			<UserInformation email={user.email ? user.email : 'oh no'}/>
		</div>
	);
}