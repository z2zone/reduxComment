export default (state = [], action) => {
	switch (action.type) {
		case "FETCH_POST":
			return action.payload.data;
		default:
			return state;
	}
};
