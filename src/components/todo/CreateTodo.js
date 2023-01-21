import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {addTodo, todoSlice} from "../../redux/state/todo/todoSlice";
import * as Toast from "sweetalert2";

const CreateTodo = () => {
    const dispatch = useDispatch();
    const taskInput = useRef();
    const isEmty = ()=>{
        if (!taskInput.current.value){
            Toast.fire({
                icon: "question",
                title: "You have nothing to do?"
            })
        }else{
            dispatch(addTodo(taskInput.current.value))
            Toast.fire({
                icon: "success",
                title: "Task added Successfully",
            })
        }
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-10'>
                    <input ref={taskInput} placeholder='Task Name' type= 'text' className='form-control'/>
                </div>
                <div className="col-md-2">
                    <button onClick={()=>{dispatch(isEmty(addTodo(taskInput.current.value)))}} className="btn btn-primary">Add Todo</button>
                </div>
            </div>
        </div>
    );
};

export default CreateTodo;