import React, { useEffect, useState  } from 'react'
import './index.css'
import axios from 'axios' ; 
import { useSelector, useDispatch} from 'react-redux';
import { URL_TODOLIST } from '../../ulti/setting';
import { GET_ALL_TASK } from '../../redux/type/typeTodoList/typeTodoList';
import { addNewTaskAction, checkTaskAction, deleteTaskAction, getAllTaskAction } from '../../redux/action/actionTodoList/actionTodolsit';
export default function TodoList() {
    const [taskName , setTaskname]= useState('') ; 
   let {taskList} = useSelector(state => state.TodoListReducer) ; 
//    console.log("taskList" , taskList) ; 
   const dispatch = useDispatch() ; 
   // get all task
   const getAllTask = () => {
        let action = getAllTaskAction() ; 
        dispatch(action) ; 
   }
   // renderTasktodo
   const renderTaskTODO = () => {
        if( taskList.length === 0 ){
            return <p>You have nothing to do today !</p>
        }else {
            return taskList.filter(task => !task.status).map(task => {
                return <li>
                    <span>{task.taskName}</span>
                    <span>
                        <button onClick={()=>{
                            doneTask(task.taskName) ; 
                        }} className='btn btn-success mx-1'>Check</button>
                        <button onClick={()=>{
                            deleteTask(task.taskName)
                        }} className='btn btn-success mx-1'>Delete</button>
                    </span>
                </li>
            })
        }
   }
   // renderTask done
   const renderTaskDone = () => {
    if(taskList.length === 0 ){
        return <p>You have nothing to do today !</p> 
    }else {
        return taskList.filter(task => task.status).map(task => {
            return <li>
                <span>{task.taskName}</span>
                <span>
                    <button onClick={()=>{
                            deleteTask(task.taskName)
                        }} className='btn btn-outline-danger'>Delete</button>
                </span>
            </li>
        }
            )
    }
   }
   // add task
   const addNewTask = (taskName) => {
            console.log(taskName) ; 
            let action = addNewTaskAction(taskName) ; 
           dispatch(action) ; 
   }
   const handleChange = (event) => {
    setTaskname(event.target.value) ; 
   }
   // delete task
   const deleteTask = (taskName) => {
        dispatch(deleteTaskAction(taskName)) ;
   }
   // done task
   const doneTask = (taskName) => {
    // console.log(taskName) ; 
    let action = checkTaskAction(taskName) ; 
    dispatch(action) ; 
   }
   useEffect(()=>{
    getAllTask() ; 
   } , [])
  return (
    <div className="card">
        
  <div className="card__header">
  <img src="./assets/img/X2oObC4.png" />
  </div>
  {/* <h2>hello!</h2> */}
  <div className="card__body">
    <div className="filter-btn">
      <a id="one" href="#"><i className="fa fa-check-circle" /></a>
      <a id="two" href="#"><i className="fa fa-sort-alpha-down" /></a>
      <a id="three" href="#"><i className="fa fa-sort-alpha-up" /></a>
      <a id="all" href="#"><i className="fa fa-clock" /></a>
      <span className="toggle-btn">
        <i className="fa fa-filter" />
        <i className="fa fa-times" />
      </span>
    </div>
    <div className="card__content">
      <div className="card__title">
        <h2>My Tasks</h2>
        <p>September 9,2020</p>
      </div>
      <div className="card__add">
        <input onChange={handleChange} id="newTask" type="text" placeholder="Enter an activity..." />
        <button onClick={()=>{
            addNewTask(taskName) ; 
        }} id="addItem">
          <i className="fa fa-plus" />
        </button>
      </div>
      <div className="card__todo">
        {/* Uncompleted tasks */}
        <ul className="todo" id="todo"> 
        {renderTaskTODO()}
        </ul>
        {/* Completed tasks */}
        <ul className="todo" id="completed" > 
       {renderTaskDone()}
        </ul>
      </div>
    </div>
  </div>
</div>

  )
}
