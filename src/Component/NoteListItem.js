import React, { Component } from 'react';
import {connect} from 'react-redux';
 class NoteListItem extends Component {
  render() {
    return (
        <div className="card">
        <div className="card-header" role="tab" id="section1HeaderId">
          <h5 className="mb-0">
            <a className="float-left" data-toggle="collapse" data-parent="#accordianId" href={"#number" + this.props.i} aria-expanded="true" aria-controls="section1ContentId">
              { 
                   this.props.Notetitle
              }
            </a>
            <input name="" id="" onClick={this.props.ChangerSTT()} className="btn btn-outline-success float-right" type="button" value="Sửa"/>
            <input name="" id="" className="btn btn-outline-danger float-right mr-2" type="button" value="Xóa"/>
          </h5>
        </div>
        <div id={"number" + this.props.i} className="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
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
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ChangerSTT: () => {
      dispatch({type:'CHANGE_EDIT_STT'})
    }
  }
}
export default connect( mapDispatchToProps)(NoteListItem)