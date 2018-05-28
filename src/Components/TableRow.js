import React, { Component } from 'react';
// const uuidv1 = require('uuid/v1');

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.state= {
            statusForm: false,
            id: this.props.Id,
            name: this.props.name,
            quyen: this.props.quyen,
            tel: this.props.tel
        }
    }
    
    converQuyen = () => {
        if(this.props.quyen === 1){
            return "Admin";
        }else if (this.props.quyen === 2){
            return "Leader";
        }else{
            return "Nember";
        }
    }

    handleOnChangeContentRecor = (event)=>{
        const name = event.target.name; 
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    checkDisplayEditButton = ()=>{
        if(this.state.statusForm){
            return (<div className="btn btn-outline-info sua" onClick={this.handleClick}><i className="fa fa-edit" /> Cập nhật </div>);

        }else{
            return (
                <div className="btn btn-outline-warning sua" onClick={this.handleClick}><i className="fa fa-edit" /> Sửa </div>
            );
        }
    }

    checkDisplayForm = () =>{
        if(this.state.statusForm){
            return (
                <tr>
                    <td >{this.props.keyId}</td>
                    <td><input type="text" className="form-control"  
                            name="name" 
                            defaultValue={this.props.name}
                            onChange= {(event)=>{this.handleOnChangeContentRecor(event)}}
                             />
                    </td>
                    <td><select className="custom-select" 
                                            name="quyen"
                                            onChange= {(event)=>{this.handleOnChangeContentRecor(event)}}
                                            >
                                        <option > {this.converQuyen()} </option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Modrator</option>
                                        <option value={3}>Normal</option>
                        </select>
                    </td>
                    <td>
                        <input type="text" className="form-control"  
                                            name="tel" 
                                            defaultValue={this.props.tel} 
                                            onChange= {(event)=>{this.handleOnChangeContentRecor(event)}}
                                            />
                    </td>
                    <td>
                        <div className="btn btn-group">
                            {this.checkDisplayEditButton()}
                            <div className="btn btn-outline-danger xoa" onClick={this.handleDelete}><i className="fa fa-edit" /> Xóa </div>
                        </div>
                    </td>
                </tr>
            );
        }else{
            return (
                <tr>
                    <td >{this.props.keyId}</td>
                    <td>{this.props.name}</td>
                    <td>{this.converQuyen()}</td>
                    <td>{this.props.tel}</td>
                    <td>
                    <div className="btn btn-group">
                        <div className="btn btn-outline-warning sua" onClick={this.handleClick}><i className="fa fa-edit" /> Sửa </div>
                        <div className="btn btn-outline-danger xoa" onClick={this.handleDelete}><i className="fa fa-edit" /> Xóa </div>
                    </div>
                    </td>
                </tr>
            );
        }
    }

    handleDelete = ()=>{
        this.props.recorDelete(this.props.Id);
    }

    handleClick = () =>{
        this.setState({
            statusForm: !this.state.statusForm
        });
        if(this.state.statusForm){
            this.props.recorEdit(this.state.id,this.state.name, this.state.quyen, this.state.tel );
        }
        
    }

    render() {

        return (
            <tbody>
                {this.checkDisplayForm()}
            </tbody>
            
        );
    }
}

export default TableRow;