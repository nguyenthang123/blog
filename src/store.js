import {Data} from './filebaseConnect';
var redux =  require('redux');
const NoteInitialState = {
    Status:false,
    editItem: {},
    titleForm:false
}
const allReducer = (state = NoteInitialState, action) => {
    switch (action.type) {
        case "ADD":
            Data.push(action.NewItem);
            return state
        case "CHANGE_EDIT_STT":
            return {...state,Status:!state.Status}  
        case "CHANGE_ADD_STT":
            return {...state,titleForm:!state.titleForm}  
        case "GetEditData":
            return  {...state,editItem:action.ItemObject}
        case "Edit":
            Data.child(action.getItem.key).update({
                Notetitle:action.getItem.Notetitle,
                Notecontent:action.getItem.Notecontent
            })
            alert("bạn đã cập nhật thành công");
            return {...state,editItem:{}}
        case "Detele":
            Data.child(action.IdDetele).remove();  
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
// store.subscribe(function() {
//      console.log(JSON.stringify(store.getState()));
// })
export default store;