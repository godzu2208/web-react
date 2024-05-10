import React from "react";
import '../../styles/ListTodoApp.scss'
import AddComponent from "./AddComponent";
import { toast } from 'react-toastify';


class ListTodoApp extends React.Component {
    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Learning ReactJs  ' },
            { id: 'todo3', title: 'Practice Toeic' },
            { id: 'todo4', title: 'Messenge with PhuongAnh' },
        ],
        editTodo: {

        }
    }

    addNewTodo = (todo) => {
        let currentTodo = this.state.listTodos;
        currentTodo.push(todo)
        this.setState({
            listTodos: currentTodo
        })

        toast.success("Wow so easy!")
    }
    handleClickEdit = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmptyObject = Object.keys(editTodo).length === 0;
        // Save
        if (isEmptyObject === false && editTodo.id === todo.id) {

            let listTodosCopy = [...listTodos]

            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));

            listTodosCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success("Updated list !!!");
            return;
        }
        // Edit 
        this.setState({
            editTodo: todo

        })
    }
    handleClickDelete = (todo) => {

        let { editTodo, listTodos } = this.state;
        let listTodosCopy = [...listTodos];
        let editTodoCopy = { ...editTodo };

        console.log(">>>listTodosCopy :", listTodosCopy, "EditCopy :", editTodoCopy)
        let isEmptyObject = Object.keys(editTodo).length === 0;
        let currentTodo = this.state.listTodos;

        console.log(">>> check list :", listTodos, "check edit : ", editTodo);
        // Cancle 
        if (isEmptyObject === false && editTodo.id === todo.id) {
            this.setState({
                editTodo: {}
            })
            return;
        }
        // Delete
        else {
            currentTodo = currentTodo.filter(item => item.id !== todo.id);
            this.setState({
                listTodos: currentTodo
            })
            toast.success("Deleted successfully !!!")
        }

    }
    handleUpdateEdit = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObject = Object.keys(editTodo).length === 0;
        console.log('>>> check empty : ', isEmptyObject)
        return (
            <>
                <div className="List-Todo">
                    <h2>List Todo App</h2>
                    <AddComponent
                        addNewTodo={this.addNewTodo}
                    />
                    <div className="list-todo-content">
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-list" key={item.id}>
                                        {isEmptyObject === true ?
                                            <span>{index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} -
                                                        <input
                                                            onChange={(event) => this.handleUpdateEdit(event)}
                                                            value={editTodo.title}
                                                        />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>
                                                }
                                            </>
                                        }
                                        <div>
                                            <button
                                                onClick={() => this.handleClickEdit(item)}
                                                className="btn-edit">
                                                {isEmptyObject === false && editTodo.id === item.id ?
                                                    'Save' : 'Edit'
                                                }
                                            </button>
                                            <button
                                                onClick={() => this.handleClickDelete(item)}
                                                className="btn-delete">
                                                {isEmptyObject === false && editTodo.id === item.id ?
                                                    'Cancel' : 'Delete'
                                                }

                                            </button>

                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div >
                </div >

            </>
        )
    }
}

export default ListTodoApp;