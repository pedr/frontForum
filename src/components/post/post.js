import React from 'react';

class Post extends React.Component {

    render() {
        return (
            <p>
                { this.props.value.content }
                <ul><li>
                    Id: { this.props.value.id  + " "}
                    Author: { this.props.value.userId }
                    </li>
                </ul>
            </p>
        );
    }
}

export default Post;