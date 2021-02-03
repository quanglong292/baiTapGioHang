import React, { Component } from "react";

export default class Modal extends Component {
  // handleAmount = () => {
  //   const amount = document.getElementById("amount").value;
  //   console.log(amount);
  // }
  handleRender = () => {
    const { cartList, handleDelete} = this.props;
    return cartList.map((item, index) => {
      return (
        <tr class="card-item" key={index}>
          <th>{item.id}</th>
          <th>{item.name}</th>
          <th>
            <img src={item.src} width={50} alt />
          </th>
          <th>
            <button>-</button>
              {/* <span>{item.amout}</span> */}
              <p>{item.amout}</p> 
            <button>+</button>
          </th>
          <th>
            <p>{item.price}</p>
          </th>
          <th>{}</th>
          <th><button className="btn btn-danger" onClick={() => {
            handleDelete(index)
          }}>Delete</button></th>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Giỏ hàng</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <table className="table">
            <thead>
              <tr>
                <th>Mã sản phẩm</th>
                <th>tên sản phẩm</th>
                <th>hình ảnh</th>
                <th>số lượng</th>
                <th>đơn giá</th>
                <th>thành tiền</th>
              </tr>
              {this.handleRender()}
            </thead>
            <tbody />
          </table>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    );
  }
}
