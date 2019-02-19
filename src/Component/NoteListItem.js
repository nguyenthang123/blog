import React, { Component } from 'react';
import {connect} from 'react-redux';
 class NoteListItem extends Component {
   TwoActionButton = () => {
       this.props.ChangeEditstatus();
      this.props.GetDataObject(this.props.Notedata)
   }
   DeteleDatatab = () => {
     this.props.DeteleData(this.props.Notedata.key);
   }
  render() {
    return (
        <div className="card">
        <div className="card-header" role="tab" id="section1HeaderId">
          <h5 className="mb-0">
            <a className="float-left" data-toggle="collapse" data-parent="#accordianId" href={"#number" + this.props.key} aria-expanded="true" aria-controls="section1ContentId">
              { 
                   this.props.Notetitle
              }
            </a>
            <button className="btn btn-outline-success float-right" onClick={ () => this.TwoActionButton()}> Sửa </button>
            <input name="" id="" className="btn btn-outline-danger float-right mr-2" type="button" value="Xóa" onClick={() => this.DeteleDatatab()}/>
          </h5>
        </div>
        <div id={"number" + this.props.key} className="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
          <div className="card-body">
               {
                    this.props.NoteContent
               }
          </div>
        </div>
      </div>      
    )
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
        type:"CHANGE_EDIT_STT",
      })
    },
    GetDataObject: (ItemObject) => {
      dispatch({
        type:"GetEditData",
        ItemObject
      })
    },
    DeteleData: (IdDetele) => {
      dispatch({
        type:"Detele",
        IdDetele
      })
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteListItem)