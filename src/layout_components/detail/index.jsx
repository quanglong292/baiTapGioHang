import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    const {productSelected} = this.props;

    return (
      <div className="row">
        <div className="col-sm-5">
          <img className="img-fluid" src={productSelected.src} alt />
        </div>
        <div className="col-sm-7">
          <h3>Thông số kỹ thuật</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{productSelected.screen}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{productSelected.ios}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{productSelected.cam}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{productSelected.secCam}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{productSelected.ram}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{productSelected.rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
