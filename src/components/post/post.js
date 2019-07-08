import React from 'react';

class Post extends React.Component {
    render() {
        return (
            <div className="mv4">
                { this.props.value.content }
                <p>
                    Criador: { this.props.value.user.nickname }
                </p>
                <p>
                    Numero de postagens: { this.props.value.user.postCount }
                </p>
            <button onClick={this.props.onClick}>
                responder
            </button>
                
            </div>
        );
    }
}

export default Post;