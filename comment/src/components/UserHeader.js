/* eslint-disable no-unused-expressions */
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

const UserHeader = (props) => {
	useEffect(() => {
		props.fetchUser(props.userId);
	}, []);

	const foundUser = props.users.find((user) => {
		return user.id === props.userId;
	});

	if (!foundUser) {
		return null;
	}

	return <div className="header">{foundUser.name}</div>;
};

const mapStateToProps = (state) => {
	return { users: state.users };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
