import { combineReducers } from 'redux';
import {QUIZ,LIST, UPDATE_ANS} from './actions';


export const listReducer = (state = [], action) => {
    if (action.type === LIST) {
        // console.log([...state, action.payload]);
        console.log(state);
        // console.log(`Pay load `);
        console.log(action.payload);
        return [...state, action.payload];
    }
    return state; 
}
export const quizReducer = (state = [], action) => {
    if(action.type === QUIZ){
        console.log('Answer recorded ');
        return [...state, action.payload];
    }
    else if (action.type === UPDATE_ANS){
        // console.warn('Got action payload as below ');
        // console.error(action.payload.index);
        state[action.payload.index] = action.payload.new_ans; 
        console.log('Congo Moin, Answer updated ');
    }
    return state; 
}
const reducer = combineReducers({
    listReducer,
    quizReducer,
});

export default reducer; 
