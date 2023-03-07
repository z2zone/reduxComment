/* eslint-disable no-unused-expressions */
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

const UserHeader = (props) => {
	useEffect(() => {
		props.fetchUser(props.userId);
	}, []);

	const foundUser = props.user;
	if (!foundUser) {
		return null;
	}

	return <div className="header">{foundUser.name}</div>;
};

const mapStateToProps = (state, ownProps) => {
	return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
