import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postsActions';

class Home extends Component  {
    
    handleClick = (post) => {
        console.log(post);
        this.props.deletePost(post.id);
        this.props.history.push('/');
    }
    
    render(){
        const { posts } = this.props;
        const postList = posts.length ? ( 
            posts.map( post => {
                return (
                    <div className='container' key={ post.id }>
                        <div>{ post.title }</div>
                        <div>{ post.body }</div><br/>
                        <button onClick={ () => this.handleClick(post)  }>delete post</button>
                    </div>
                )
            })
        ) : (
            <div>No posts was found</div>
        )
        return (
            <div>
                <h1>Home</h1>
                { postList }
            </div>
        );
    }
}
const mapStateToProps = (state) => {    
    return {
        posts: state.posts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch (deletePost(id)) } 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);