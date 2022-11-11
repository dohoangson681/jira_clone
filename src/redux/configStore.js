import {combineReducers , createStore , applyMiddleware} from 'redux'
import { TodoListReducer } from './reducer/TodoListReducer';
import { JiraReducer } from './reducer/JiraReducer';
import thunk from 'redux-thunk';
const RootReducer = combineReducers({
    TodoListReducer , JiraReducer
}) ;
export const store = createStore(RootReducer , applyMiddleware(thunk)) ; 