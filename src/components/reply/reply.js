
import React from 'react';
import './index.css';

class Reply extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.content);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            content: event.target.content
        });
    }



    render() {
        return (
            <form
                className="flex flex-row-reverse center mv3"
                onSubmit={this.handleSubmit}
            >

                <textarea 
                    cols="80"
                    rows="5"
                    className="mh3 pa3"
                    value={this.state.content}
                    onChange={this.handleChange}
                />

                <div className="ml2 flex flex-column">
                    <p className="">Respondendo a #id</p>
                    <button type="submit">Enviar</button>
                </div>

            </form>
        );
    };
}

export default Reply;