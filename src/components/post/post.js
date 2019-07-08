import React from 'react';

class Post extends React.Component {

    render() {
        return (
            <p className="mv4">
                { this.props.value.content }
                <p>
                    Criador: { this.props.value.user.nickname }
                    Numero de postagem: { this.props.value.user.postCount }
                </p>
                
            </p>
        );
    }
}

export default Post;