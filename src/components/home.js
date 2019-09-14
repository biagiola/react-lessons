import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component  {
    render(){
        const { posts } = this.props;
        const postList = posts.length ? ( 
            posts.map( post => {
                return (
                    <div className='container'>
                        <div>{ post.title }</div>
                        <div>{ post.body }</div><br/>
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
export default connect(mapStateToProps)(Home);