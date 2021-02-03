import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-danger "
          data-toggle="modal"
          data-target="#modelId"
        >
          Giỏ hàng (0)
        </button>
      </div>
    );
  }
}
