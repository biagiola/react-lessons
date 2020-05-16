import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postsActions';

class Post extends Component {
    
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }

    render() {
        console.log(this.props);
        const post = this.props.post ? (
            <div>
                <h4>{ this.props.post.title }</h4>
                <p>{ this.props.post.body }</p>
                <button onClick={ this.handleClick  }>delete post</button>
            </div>
        ) : (
            <div>Loading post</div>
        )
        return (
            <div>
                { post }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;//post_id is the path of an individual post set it in <Route path=''>
    return {
        post: state.posts.find(post => post.id === id) //we grab only the post that we want
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch( deletePost(id) ) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);