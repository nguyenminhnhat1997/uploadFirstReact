import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid text-center">
            <div className="container">
              <h1 className="display-3">Quản lý thành viên bằng ReactJS với dữ liệu json</h1>
              <hr className="my-2" />
            </div>
          </div>
          
        );
    }
}

export default Header;