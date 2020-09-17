import React, {Component} from 'react';

import {Redirect} from 'react-router-dom';

import './NewTodo.css';

class NewTodo extends Component {
    state = {
        title: '',
        content: '',
        submitted: false,
    }

    // postTodoHandler = () => {
    //     const data = {title: this.state.title, content: this.state.content};
    //     alert('Submitted\n' + data.title + '\n' + data.content);
    //     this.setState( {submitted: true} )
    // }

    postTodoHandler = () => {
        const data = {title: this.state.title, content: this.state.content};
        alert('Submitted\n' + data.title + '\n' + data.content);
        this.setState( {submitted: true} );
        this.props.history.push('/todos');
        // or this.props.history.goBack();
    }

    render() {
        if (this.state.submitted) {
            return <Redirect to='/todos'/>
        }
        return (
            <div className="NewTodo">
                <h1> Add a Todo </h1>
                <label> Title </label>
                <input type="text" value={this.state.title}
                        onChange={(event) => this.setState({title: event.target.value})}>
                </input>
                <label> Content </label>
                <textarea rows="4" type="text" value={this.state.content}
                        onChange={(event) => this.setState({content: event.target.value})}>
                </textarea>
                {/* <button onClick={() => alert('Submitted')}> Submit </button> */}
                <button onClick={() => this.postTodoHandler()}> Submit </button>

            </div>
        );
    }
}

export default NewTodo;