import {combineReducers , createStore , applyMiddleware} from 'redux'
import { TodoListReducer } from './reducer/TodoListReducer';
import thunk from 'redux-thunk';
const RootReducer = combineReducers({
    TodoListReducer
}) ;
export const store = createStore(RootReducer , applyMiddleware(thunk)) ; 