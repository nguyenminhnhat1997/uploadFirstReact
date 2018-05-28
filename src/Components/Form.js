import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state ={
            "name": "",
            "quyen": "",
            "tel": ""
        }
    }
    
    handleOnChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        })
    
    }

    displayForm = () => {
        if(this.props.status){
            return (
                <div className="col">
                    <div className="card border-success mt-2">
                                <div className="card">
                                <div className="card-header">
                                    Thêm mới user vào hệ thống
                                </div>
                                <form>
                                <div className="card-body">
                                    <div className="form-group">
                                    <input type="text" className="form-control" 
                                                        name="name" 
                                                        placeholder="Tên user" 
                                                        onChange= {(event)=>{this.handleOnChange(event)}}
                                                        />
                                    </div>
                                    <div className="form-group">
                                    <input type="number" className="form-control" 
                                                        name="tel" 
                                                        placeholder="Số điện thoại" 
                                                        onChange= {(event)=>{this.handleOnChange(event)}}
                                                        />
                                    </div>
                                    <div className="form-group">
                                    <select className="custom-select" 
                                            name="quyen"
                                            onChange= {(event)=>{this.handleOnChange(event)}}
                                            >
                                        <option > Chọn quyền mặc định </option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Modrator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="card-footer text-muted">
                                    <input className="btn btn-block btn-info" 
                                    onClick={()=>{this.props.contentForm(
                                        this.state.name, this.state.tel, this.state.quyen
                                    )}}
                                    defaultValue="Thêm mới"
                                    type="reset"
                                    /> 
                                </div>
                                </form>
                                </div>
                            </div>
                            </div>
                
            );

        }else{
            return null;
        }
    }


    render() {
        return (
            <div>
                {this.displayForm()}
            </div>
        );
    }
}

export default Form;