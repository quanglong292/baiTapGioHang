import React, { Component } from "react";

export default class Header extends Component {
  render() {
    const {cartList} = this.props;
    let sumAmount =  cartList.reduce((sum, item, index) => {
      return sum += item.amout;
    }, 0)

    return (
      <div>
        <button
          className="btn btn-danger "
          data-toggle="modal"
          data-target="#modelId"
        >
          Giỏ hàng <span>({
          () => {
            return cartList.reduce((sum, item, index) => {
              return sum += item.amout;
            }, 0)
          }
          })</span>
        </button>
      </div>
    );
  }
}
