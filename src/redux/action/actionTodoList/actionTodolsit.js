import axios from "axios";
import { URL_TODOLIST } from "../../../ulti/setting";
import { GET_ALL_TASK } from "../../type/typeTodoList/typeTodoList";

export const getAllTaskAction = () => {
  return (dispatch2) => {
    let promise = axios({
      method: "get",
      url: `${URL_TODOLIST}/api/ToDoList/GetAllTask`,
    });
    promise
      .then((res) => {
        // console.log(res.data) ;
        let action = {
          type: GET_ALL_TASK,
          data: res.data,
        };
        dispatch2(action);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };
};
// export const addNewTaskAction = (taskName) => {
//     return dispatch2 => {
//         let promise = axios({
//             method: 'POST',
//             url: `${URL_TODOLIST}/api/ToDoList/AddTask`,
//             data: {
//               taskName
//             }
//           });
//           promise.then(res => {
//                 // them task thanh cong => goi api
//                 // getAllTask() ;
//                 // console.log('success !') ;
//                 dispatch2(getAllTaskAction()) ;
//           }).catch(err => {
//             console.log(err) ;
//           })
//     }
// }
export const addNewTaskAction = (taskName) => {
  return (dispatch2) => {
    let promise = axios({
      method: "POST",
      url: `${URL_TODOLIST}/api/ToDoList/AddTask`,
      data: {
        taskName,
      },
    });
    promise
      .then((res) => {
        // them task thanh cong => goi api
        // getAllTask() ;
        // console.log('success !') ;
        // sau khi add task duoc thanh cong => gui action get all task len redux de lay data ve
        dispatch2(getAllTaskAction());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const deleteTaskAction = (taskName) => {
    return dispatch2 => {
        let promise = axios({
            method: 'DELETE',
            url: `${URL_TODOLIST}/api/ToDoList/deleteTask?taskName=${taskName}`
            
          });
          promise.then(res => {
                dispatch2(getAllTaskAction())
          }).catch(err => {
            console.log(err) ; 
          })
    }
}
export const checkTaskAction = (taskName) => {
  return dispatch2 => {
    let promise = axios({
      method: 'PUT',
      url: `${URL_TODOLIST}/api/ToDoList/doneTask?taskName=${taskName}`
      
    });
    promise.then(res => {
          // them task thanh cong le api => xu ly xong bat dong bo => dispatch len reuducer
          let action = getAllTaskAction() ; 
         dispatch2(action)
    }).catch(err => {
      console.log(err) ; 
    })
  }
}
