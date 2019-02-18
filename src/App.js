import React, { Component } from 'react';
import './App.css';
import Nav from './Component/Nav';
import NoteList from './Component/NoteList';
import NoteForm from './Component/NoteForm';
import {connect} from 'react-redux';

class App extends Component {
  showForm = () => {
     if(this.props.Status){
     return <NoteForm/>
     }
  }
  render() {  
    return (
      <div className="App">
         <Nav/>
         <div className="container">
           <div  className="row">
              <NoteList GetAllData = {()=> this.GetallData()}/>
              {
                 this.showForm()
              }
           </div>
         </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    Status: state.Status
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ChangeEditstatus: () => {
      dispatch({
        type:"CHANGE_EDIT_STT"
      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
