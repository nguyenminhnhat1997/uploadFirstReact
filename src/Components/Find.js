import React, { Component } from 'react';

class Find extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content : ''
        }
    }
    saveContent = (event)=>{
        this.setState({
            content : event.target.value          
        });
        this.props.contentFind(this.state.content);
    }
    checkDisplayButton = () =>{
        if(this.props.status){
            return (<div className="btn btn-danger ml-2" onClick={this.props.clicked}> Đóng lại </div>);
        }else{
            return ( <div className="btn  btn-success ml-2" onClick={this.props.clicked} > Thêm mới </div>);
        }
    }

    render() {
        return (
            <div className="col-12">
  <div className="form-group">
    <div className="btn-group">
      <input type="text" className="form-control"  
      placeholder="Tìm kiếm" 
      style={{width: 577}}
      onChange = {(event)=>{this.saveContent(event)}}
      
      />
      <div className="btn btn-info" onClick= {() => {this.props.contentFind(this.state.content)}}>Tìm</div>
    </div>
    {this.checkDisplayButton()}
  </div>
</div>

        );
    }
}

export default Find;