import React, { Component } from 'react';

import '../App.css';
import Header from './Header';
import Find from './Find';
import Table from './Table';
import Form from './Form';
import Data from './Data.json';

const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusDisplay: false,
      data: Data,
      dataFind: ''
      
    }
  }

  editRecor = (id, name, quyen, tel) => {
    var indexFind = this.state.data.findIndex((element)=>{
      return element.id === id
    });
    var ElementID = this.state.data[indexFind];
    ElementID.name = name;
    ElementID.quyen = quyen;
    ElementID.tel = tel;
    var listElement = this.state.data;
    listElement[indexFind] = ElementID;
    this.setState({
      data:listElement
    });
    localStorage.setItem("dataUser", JSON.stringify(listElement));
  }

  deleteRecor = (idUser)=>{
    //  var dataNow = this.state.data;
    //  dataNow.splice(id-1,1);
    //  this.setState({
    //    data:dataNow
    //  });
    // Sử dụng filter hay hơn
    
    var dataNow = this.state.data.filter(item => item.id  !== idUser);

    this.setState({
          data:dataNow
        });
      localStorage.setItem("dataUser", JSON.stringify(dataNow));
  }

  acceptForm = ( name, tel , quyen )=>{
    var item = {};
    item.id = uuidv1() ;
    item.name = name ;
    item.tel = tel ;
    item.quyen = quyen ;
    var items = this.state.data;
    items.push(item);
    this.setState({
      data: items
    });
    localStorage.setItem("dataUser", JSON.stringify(items));
  }

  acceptText = (data) =>{
    this.setState({
      dataFind: data
    });

  }

  changeStatus = () =>{
      this.setState({
        statusDisplay: !this.state.statusDisplay
      })
  }

  
  componentWillMount() {
    
    if(localStorage.getItem('dataUser') === null){
    
      localStorage.setItem('dataUser',JSON.stringify(Data));  
    
  }else{
      var temp = JSON.parse( localStorage.getItem('dataUser'));
      this.setState({ 
        data: temp  
    });    
  }
  }
  

  render() {
    var arrayFind = [];
    this.state.data.forEach(element => {
      if(element.name.indexOf(this.state.dataFind) !== -1){
        arrayFind.push(element);
      }
    });
    return (
      <div>
        <Header/>
        <div className="searchForm">
          <div className="container">
            <div className="row">
                <Find status = {this.state.statusDisplay} 
                      clicked = {this.changeStatus} 
                      contentFind = {this.acceptText}
                      />
                <Table data = {arrayFind}
                      editFunction = {this.editRecor}
                      deleteFunction = {this.deleteRecor}
                />
                <Form status={this.state.statusDisplay}
                      contentForm = {this.acceptForm}
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
