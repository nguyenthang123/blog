import React, { Component } from 'react'

export default class Nav extends Component {
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
            <li className="nav-item">
              <a className="nav-link" href="#xds"> Xem danh sách </a>
            </li>
          </ul>
        </div>
      </nav>
      
    )
  }
}
