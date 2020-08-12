import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
    listReducer: ['Angular', 'Ionic', 'WordPress', 'Woocommerce', 'React'], 
    quizReducer : []
};
// const store = createStore(listReducer, initialState);
const store = createStore(reducer, initialState);
// store.dispatch(updateList(10));

export default store; 