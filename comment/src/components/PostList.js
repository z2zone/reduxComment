import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

const PostList = (props) => {
    useEffect(()=>{
        props.fetchPost();
        console.log(props.fetchPost());
    }, []);

    return(
        <div>
            PostList
        </div>
    );
}

export default connect(null,{fetchPost})(PostList);