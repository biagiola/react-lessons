import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost, editBody } from '../actions/postsActions';

class Post extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.post.id,
            title: this.props.post.title,
            body: this.props.post.body,
            showInput: false,
        }
        this.deleteCall = this.deleteCall.bind(this);
        this.showForm = this.showForm.bind(this);
        this.sendEditCall = this.sendEditCall.bind(this);
    }

    deleteCall = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }

    showForm = () => {
        this.setState({
            showInput: true
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    sendEditCall = (e) => {
        e.preventDefault();
        const post = {
            id: this.state.id, title: this.state.title, body: this.state.body
        }
        this.props.editBody(post);
        document.getElementById('body').innerHTML = post.body;
    }

    render() {

        const post = this.props.post ? (
            <div>
                <h4>{ this.props.post.title }</h4>
                <p id="body" onChange={ this.handleChange }>{ this.props.post.body }</p>
                <button onClick={ this.deleteCall  }>delete post</button>
                <button onClick={ this.showForm  }>Edit body</button>
            </div>
        ) : ( <div>Loading post</div> )

        const form = this.state.showInput ? (
            <div>
                <form onSubmit={ this.sendEditCall }>
                    <label htmlFor="body">Edit:</label><br/>
                    <textarea id="body" defaultValue={ this.props.post.body } onChange={ this.handleChange } rows="10" cols="60"/>
                    <button>save</button>
                </form>
            </div>
        ) : ( <div></div> )

        return (
            <div>
                <div>{ post }</div>
                <div>{ form }</div>
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
        deletePost: (id) => { dispatch( deletePost(id) ) },
        editBody: (post) => { dispatch( editBody(post) ) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);
