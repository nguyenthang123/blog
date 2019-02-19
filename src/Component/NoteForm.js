import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteForm extends Component {
    constructor(props){
         super(props);
         this.state  = {
           Notetitle:'',
           Notecontent:'',
           key: ''
         }
    }
    componentWillMount() {
       if(this.props.DataEdit) {
          this.setState({
            Notetitle:this.props.DataEdit.Notetitle,
            Notecontent:this.props.DataEdit.Notecontent,
            key: this.props.DataEdit.key
          })
       }
       else {
        this.setState({
          Notetitle:"",
          Notecontent:"",
          key: ""
        })
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
      if (this.state.key){
          var EditObject = {};
          EditObject.key = this.state.key;
          EditObject.Notetitle = this.state.Notetitle;
          EditObject.Notecontent = this.state.Notecontent;
          this.props.EditDatastore(EditObject);
          this.props.ChangerStt();
      } 
      else {
        var item = {};
        item.Notetitle  = title;
        item.Notecontent = content;
       this.props.AddDatastore(item);
       alert('thêm dữ liệu' + JSON.stringify(item) + "thành công");
      }
    }
    AddTitle = () => {
       if(this.props.SttADd){
          return <h4> Thêm mới </h4>
       }
       else {
          return <h4> Sửa nội dung </h4>
       }
    }
  render() {
    return (
        <div className="col-4">
       { this.AddTitle()}
        <form> 
            <div className="form-group">
            <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="Notetitle" id="y" aria-describedby="helpId" placeholder="Name Note"  defaultValue={this.props.DataEdit.Notetitle}/>
            </div>
            <div className="form-group">
            <textarea onChange={(event) => this.isChange(event)} type="text" className="form-control" name="Notecontent" id="x" cols={30} rows={10} placeholder="Nội dung note " defaultValue={this.props.DataEdit.Notecontent} />
            </div>
            <button type="reset" onClick={ () => this.addNew(this.state.Notetile,this.state.Notecontent)} className="btn btn-primary btn-block"> Lưu </button>
        </form>
      </div>
      
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    DataEdit: state.editItem,
    SttADd:state.titleForm
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    AddDatastore: (NewItem) => {
      dispatch({type:"ADD",NewItem})
    },
    EditDatastore: (getItem) => {
      dispatch({type:"Edit",getItem})
    },
    ChangerStt: () => {
      dispatch({type:"CHANGE_EDIT_STT"})
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps,)(NoteForm)
