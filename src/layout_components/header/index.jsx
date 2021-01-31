import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div>
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
           Giỏ hàng (1)
          </button>
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      //   <div>
      //     <h3 className="title text-center">Bài tập giỏ hàng</h3>
      //     <div className="container text-center my-2">
      //       <button
      //         className="btn btn-danger "
      //         data-toggle="modal"
      //         data-target="#modelId"
      //       >
      //         Giỏ hàng (1)
      //       </button>
      //     </div>

      //     <div
      //       className="modal fade show"
      //       id="modelId"
      //       tabIndex={-1}
      //       aria-labelledby="modelTitleId"
      //       style={{ display: "block", paddingRight: 17 }}
      //       aria-modal="true"
      //       role="dialog"
      //     >
      //       <div
      //         className="modal-dialog"
      //         role="document"
      //         style={{ maxWidth: 1000 }}
      //       >
      //         <div className="modal-content">
      //           <div className="modal-header">
      //             <h5 className="modal-title">Giỏ hàng</h5>
      //             <button
      //               type="button"
      //               className="close"
      //               data-dismiss="modal"
      //               aria-label="Close"
      //             >
      //               <span aria-hidden="true">×</span>
      //             </button>
      //           </div>
      //           <div className="modal-body">
      //             <table className="table">
      //               <thead>
      //                 <tr>
      //                   <th>Mã sản phẩm</th>
      //                   <th>tên sản phẩm</th>
      //                   <th>hình ảnh</th>
      //                   <th>số lượng</th>
      //                   <th>đơn giá</th>
      //                   <th>thành tiền</th>
      //                 </tr>
      //               </thead>
      //               <tbody>
      //                 <tr className="card-item">
      //                   <td>1</td>
      //                   <td>Meizu 16Xs</td>
      //                   <td>
      //                     <img src="./img/meizuphone.jpg" width={50} alt />
      //                   </td>
      //                   <td>
      //                     <button>-</button>1<button>+</button>
      //                   </td>
      //                   <td>7600000</td>
      //                   <td>7600000</td>
      //                   <td>
      //                     <button className="btn btn-danger">Delete</button>
      //                   </td>
      //                 </tr>
      //               </tbody>
      //             </table>
      //           </div>
      //           <div className="modal-footer">
      //             <button
      //               type="button"
      //               className="btn btn-secondary"
      //               data-dismiss="modal"
      //             >
      //               Close
      //             </button>
      //             <button type="button" className="btn btn-primary">
      //               Save
      //             </button>
      //           </div>
      //         </div>
      //       </div>
      //     </div>

      //   </div>
    );
  }
}
