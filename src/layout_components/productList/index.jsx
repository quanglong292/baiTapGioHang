import React, { Component } from "react";
import Product from "./product";

export default class Products extends Component {
  render() {
    const {products, handleSelected, handleRenderModal, handlePushAmount} = this.props;
    return products.map((item, index) => {
      return (
        <div className="col-sm-4">
          <Product key={index} product={item} handleSelected={handleSelected} handleRenderModal={handleRenderModal} handlePushAmount={handlePushAmount}/>
        </div>
      );
    });
  }
}
