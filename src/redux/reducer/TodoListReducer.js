import { GET_ALL_TASK } from "../type/typeTodoList/typeTodoList";


const initState = {
    taskList : []
} ;
export const TodoListReducer = (state = initState , action) => {
    switch (action.type) {
       case GET_ALL_TASK : 
            {
                // console.log(action) ; 
                state.taskList = [...action.data] ; 
            }
            return {...state}
        default:
            return state;
    }
}