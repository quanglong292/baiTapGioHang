import React, { Component } from "react";

export default class Product extends Component {
  handleModal = () => {
    const {product, handlePushAmount} = this.props;
    handlePushAmount(product);
  }
  render() {
    const {product, handleSelected} = this.props;
    
    return (
      <div className="card">
        <img className="card-img-top" src={product.src} alt />
        <div className="card-body">
          <h4 className="card-title">{product.name}</h4>
          <button className="btn btn-success" onClick={()=>{
            handleSelected(product)
          }}>Chi tiết</button>
          <button className="btn btn-danger" onClick={() => {
            this.handleModal()
          }}>Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}
