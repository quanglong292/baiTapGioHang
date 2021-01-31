import React, { Component } from "react";
import Product from "./product";

export default class Products extends Component {
  render() {
    return (
      <div className="container danh-sach-san-pham">
        <div className="row">
          <div className="col-sm-4">
            <Product />
          </div>
          <div className="col-sm-4">
            <Product />
          </div>
          <div className="col-sm-4">
            <Product />
          </div>
        </div>
      </div>
    );
  }
}
