import React, { Component } from 'react'
import NoteListItem from './NoteListItem';
import { Data } from './../filebaseConnect';

export default class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data:[]
    }
 }
 componentWillMount() {
      Data.on('value',(notes)=> { 
        var arryData = [];
        notes.forEach(element => {
          const key = element.key;
          const Notetile = element.val().Notetitle;
          const Notecontent = element.val().Notecontent;
          arryData.push({
              key:key,
              i:key,
              Notetitle:Notetile,
              Notecontent:Notecontent
          });
          this.setState({
              Data:arryData
          })
        });
    });
 }
 GetAlldata = () => {
     if(this.state.Data) {
        return this.state.Data.map((value,key) => {
             return (
                 <NoteListItem key={key} Notetitle={value.Notetitle} NoteContent={value.Notecontent}/>
             );
        });
     }
 }
  render() {
    return (
        <div className="col">
        <div id="accordianId" role="tablist" aria-multiselectable="true">
           {
               this.GetAlldata()
           }
        </div>
      </div>
      
    )
  }
}
