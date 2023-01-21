import React from 'react';
import TodoList from "../components/todo/TodoList";
import CreateTodo from "../components/todo/CreateTodo";

const TodoPage = () => {
    return (
        <div className='container my-5'>
            <div className='row'>
                <div className='col-12'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>My To Do App</h4>
                        </div>
                        <div className='card-body'>
                            <CreateTodo/>
                            <TodoList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoPage;