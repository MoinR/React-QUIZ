export const LIST = 'LIST';
export const QUIZ = 'QUIZ';
export const UPDATE_ANS = 'UPDATE_ANS';
// Action creators 
export const updateList = (update) => ({
    type: LIST,
    payload: update,
});
export const insertAns = (ans) => ({
    type: QUIZ,
    payload: ans,
});
export const updateAns = (new_ans, index) => ({
    type: UPDATE_ANS,
    payload: {new_ans, index},
});


export default LIST; 