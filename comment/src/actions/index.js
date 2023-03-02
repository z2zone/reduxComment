import { jsonPlaceHolder } from "../apis/jsonPlaceHolder";

export const fetchPost = () => {
    return async (dispatch) => {
        const response = await jsonPlaceHolder.get('/posts');
        dispatch({type:'FETCH_POST', payload: response});
    }
};