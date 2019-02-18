import {Data} from './filebaseConnect';
var redux =  require('redux');
const NoteInitialState = {
    Status:false
}
const allReducer = (state = NoteInitialState, action) => {
    switch (action.type) {
        case "ADD":
        Data.push(action.NewItem);
            return state
        case "CHANGE_EDIT_STT":
        return {...state,status:!state.Status}      
          
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
export default store;