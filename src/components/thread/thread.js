import React from 'react';
import axios from 'axios';
import Post from '../post';

class Thread extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            isFetching: true,
            posts: null,
            content: null,
        };
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
            postsComponents.push(<li> <Post value={ post }/> </li>)
        }
        return (
            <div>
                <h4>{ this.state.content }</h4>
                <ul>
                    { postsComponents }
                </ul>
            </div>
        );
    }
}

export default Thread;