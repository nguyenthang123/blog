import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteForm extends Component {
    constructor(props){
         super(props);
         this.state  = {
           Notetile:'',
           Notecontent:''
         }
    }
    isChange = (event) => {
         const name = event.target.name;
         const value = event.target.value;
         this.setState({
            [name]:value 
         })
    }
    addNew = (title,content) => {
         var item = {};
         item.Notetitle  = title;
         item.Notecontent = content;
        this.props.AddDatastore(item);
        alert('thêm dữ liệu' + JSON.stringify(item) + "thành công");
    }
  render() {
    return (
        <div className="col-4">
        <h3> 
          Chỉnh sủa form Edit
        </h3>
        <form> 
            <div className="form-group">
            <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="Notetile" id="y" aria-describedby="helpId" placeholder="Name Note" />
            </div>
            <div className="form-group">
            <textarea onChange={(event) => this.isChange(event)} type="text" className="form-control" name="Notecontent" id="x" cols={30} rows={10} placeholder="Nội dung note " defaultValue={""} />
            </div>
            <button type="reset" onClick={ () => this.addNew(this.state.Notetile,this.state.Notecontent)} className="btn btn-primary btn-block"> Submit </button>
        </form>
      </div>
      
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    testDataconnect: state.testDataconnect
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    AddDatastore: (NewItem) => {
      dispatch({type:"ADD",NewItem})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps,)(NoteForm)
