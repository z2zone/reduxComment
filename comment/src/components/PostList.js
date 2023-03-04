import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

const PostList = (props) => {
    useEffect(()=>{
        props.fetchPost();
    }, []);
    const rednerList = () => {
        return props.posts.map(post => {
           return (
            <div className='item' key={post.id}>
                <i className='large middle aligned icon user'/>
                <div className='content'>
                    <div className='description'>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                </div>
            </div>
           ); 
        });
    }
    return(
        <div className="ui relaxed divided list">
            {rednerList}
        </div>
    );
}

const mapStateToProps = (state) => {
    return { posts: state.posts };
}

export default connect(mapStateToProps,{fetchPost})(PostList);