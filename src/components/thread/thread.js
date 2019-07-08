import React from 'react';
import axios from 'axios';
import Post from '../post';
import Reply from '../reply';

class Thread extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            isFetching: true,
            posts: null,
            content: null,
            replyTo: null,
        };
        this.handleClickOnReply = this.handleClickOnReply.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8000/threads/' + this.state.id)
            .then( (resp) => {
                const { data }= resp;
                this.setState({
                    posts: data.posts,
                    isFetching: false,
                    content: data.content,
                })
            })
            .catch(e => console.log(e));
    }

    handleClickOnReply(post) {
        this.setState({
            replyTo: post.id,
        });
    }


    render() {
        const postsComponents = [];
        if (this.state.isFetching) {
            return (
                <div>
                    <p>Fetching data</p>
                </div>
            );
        }
        for (const post of this.state.posts) {
            postsComponents.push(
                <li key={post.id}>
                    <Post onClick={() => this.handleClickOnReply(post)}
                        value={ post }/>
                </li>
            )
        }
        return (
            <div className="b--light-silver ma5 ba">
                <h4 className="pa3">{ this.state.content }</h4>
                <ul>
                    { postsComponents }
                </ul>
                <Reply replyTo={this.state.replyTo}/>
            </div>
        );
    }
}

export default Thread;