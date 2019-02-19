import React, { Component } from 'react'
import {connect} from 'react-redux'

class Nav extends Component {
   handeAdd = (event) => {
     event.preventDefault();
     this.props.changerStt();
     this.props.ChangeADDstt();
   }
  render() {
    return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-black mb-4" style={{backgroundColor: 'black'}}>
        <a className="navbar-brand" href="#hanoi"> Blog </a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
          <ul className="navbar-nav  mt-2 mt-lg-0 float-right">
            <li className="nav-item active">
              <a className="nav-link" href="#hcm">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link"  onClick={(event) => this.handeAdd(event)} href="http://google.com"> Thêm mới gi chú </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#xds"> Xem danh sách </a>
            </li>
          </ul>
        </div>
      </nav>
      
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changerStt: () => {
      dispatch({
         type:"CHANGE_EDIT_STT"
      })
    },
    ChangeADDstt: () => {
      dispatch({
         type:"CHANGE_ADD_STT"
      })
    }
  }
} 
export default connect( mapStateToProps,mapDispatchToProps)(Nav)