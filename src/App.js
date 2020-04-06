import React, { Component } from 'react';
import './App.css';

export class App extends Component {

  showInfoProduct(product){
    if (product.status) {
      return (
        <h3>
          ID : {product.id} <br />
          Name : {product.name} <br />
          Price : {product.price} VNĐ <br />
          Status : { product.status ? 'Active' : 'Pending' }
        </h3>
      )
    }
  }
  render() {
    var a = 5;
    var b = 7;
    var name = 'trinhmn';
    var product = {
      id: 1,
      name: 'Iphone 7 plus',
      price: 15000000,
      status: true,
    };

    var users = [
      {
        id: 1,
        name: 'Nguyễn Văn A',
        age: 18,
      },
      {
        id: 2,
        name: 'Trần Văn B',
        age: 24,
      },
      {
        id: 3,
        name: 'Lý Thị C',
        age: 30,
      },
    ];

    var elements = users.map((user, index) => {
      return (
        <div key={index}>
          <h2>{user.name}</h2>
          <p>{user.age}</p>
        </div>
      )
    })
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Title</a>
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Link</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="ml-30">
          <h2>
            a : {a} <br />
            b : {b} <br />
            a + b = {a + b} <br />
          </h2>
          <h3>
            name : {name}
          </h3>
          { this.showInfoProduct(product) }
          <hr />
          { elements }
        </div>

      </div>
    )
  }
}

export default App;
