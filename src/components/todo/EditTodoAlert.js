import * as Swal from "sweetalert2";
import store from "../../redux/store/store";
import {editTodo} from "../../redux/state/todo/todoSlice";

export function EditTodoAlert(i, item) {
    Swal.fire({
        title: 'Are you to update?',
        input: 'text',
        inputValue: item,
        inputValidator:(value)=>{
            if(value){
                store.dispatch(editTodo({index:i,task:value}))
            }
        }
    })
}