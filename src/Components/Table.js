import React, { Component } from 'react';
import TableRow from './TableRow';

class Table extends Component {
    render() {
      var newRow = this.props.data.map((value, index)=>{
        return (<TableRow key = {index} 
                          name = {value.name} 
                          keyId={index+1}
                          Id = {value.id}
                          recorEdit= {this.props.editFunction}
                          recorDelete = {this.props.deleteFunction}
                          quyen = {value.quyen}
                          tel={value.tel}
                          element= {value}
                />);
      });
        return (
            <div className="col">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th> STT </th>
                  <th> Tên </th>
                  <th>Quyền</th>
                  <th>Điện thoại</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              
                  {newRow}
              
            </table>
          </div>
          
        );
    }
}

export default Table;