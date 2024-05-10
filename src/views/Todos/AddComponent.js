import React from "react";
import '../../styles/ListTodoApp.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class AddComponent extends React.Component {
    state = {
        title: '',
    }
    handleInputTodoChange = (event) => {
        this.setState({
            title: event.target.value
        });
    }
    handleAddTodo = () => {
        if (!this.state.title) {
            toast.error('Please enter a title');
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1000),
            title: this.state.title
        }
        this.props.addNewTodo(todo)
        this.setState({
            title: '',
        })

    }
    render() {
        // let { id } = this.state;
        let { title } = this.state;
        return (
            <>
                <div className="row">
                    <input value={title} className="textInput" placeholder="Add your tasks ..."
                        onChange={(event) => this.handleInputTodoChange(event)}
                    />
                    <button onClick={() => this.handleAddTodo()} className="btn-add">Add</button>
                </div>
            </>
        )
    }
}

export default AddComponent;