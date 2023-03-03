import jsonPlaceHolder  from "../apis/jsonPlaceHolder";

export const fetchPost = () => async (dispatch, getState) => {
    const response = await jsonPlaceHolder.get('/posts');
    dispatch({type:'FETCH_POST', payload: response});
}
