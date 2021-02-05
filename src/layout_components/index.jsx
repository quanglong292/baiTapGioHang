import React, { Component } from "react";
import Detail from "./detail";
import Header from "./header";
import Modal from "./header/Modal";
import Products from "./productList";
import Product from "./productList/product";


export default class MainRender extends Component {
  state = {
    productSelected: {
        id: 1,
        name: "VinSmart Live",
        src: "./img/vsphone.jpg",
        screen: "AMOLED, FHD+ 2232 x 1080 pixels",
        ios: "Android 9.0 (Pie)",
        cam: "20 MP",
        secCam: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "6 GB",
        price: 1000,
        amout: 1,
    },
    cartList: [],
  };

  products= [{
    id: 1,
    name: "VinSmart Live",
    src: "./img/vsphone.jpg",
    screen: "AMOLED, FHD+ 2232 x 1080 pixels",
    ios: "Android 9.0 (Pie)",
    cam: "20 MP",
    secCam: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "6 GB",
    price: 500000,
    amout: 1,
  },
  {
    id: 2,
    name: "Meizhu",
    src: "./img/meizuphone.jpg",
    screen: "AMOLED, FHD+ 2232 x 1080 pixels",
    ios: "Android 9.0 (Pie)",
    cam: "15 MP",
    secCam: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "6 GB",
    price: 600000,
    amout: 1,
  },
  {
    id: 3,
    name: "Iphone X",
    src: "./img/applephone.jpg",
    screen: "AMOLED, FHD+ 2232 x 1080 pixels",
    ios: "Android 9.0 (Pie)",
    cam: "25 MP",
    secCam: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "6 GB",
    price: 700000,
    amout: 1,
  },
]

  handleSelected = (product) => {
    this.setState({
      productSelected: product,
    });
  }

  
  handleDelete = (index) => {
    const {cartList} = this.state;
    this.setState({
      cartList: cartList.filter((item, i) => {
        // Vị trí được click trùng với index của filter => 
        // console.log(i);
        return i !== index;
      })
    })
    // console.log(index); 
  }

  handlePushAmount = (item) => {
    let newItem = {
        id: item.id,
        name: item.name,
        src: item.src,
        price: item.price,
        amout: 1,
    }
    let newCartList = [...this.state.cartList];
    let index = newCartList.findIndex(index => index.id === newItem.id);
    if (index !== -1) {
      newCartList[index].amout += 1;
    } else {
      newCartList.push(newItem);
    }

    this.setState({
      cartList: newCartList,
    })
    console.log(this.state.cartList.amout);
  }


  render() {
    return (
      <div>
        <section className="container">
          <h3 className="title text-center">Bài tập giỏ hàng</h3>
          <div className="container text-center my-2">
            <Header cartList = {this.state.cartList}/>
          </div>
          <div className="container danh-sach-san-pham row">
            <Products products={this.products} handleSelected={this.handleSelected} handleRenderModal={this.handleRenderModal} handlePushAmount={this.handlePushAmount}/>
          </div>
          <div
            className="modal fade"
            id="modelId"
            tabIndex={-1}
            aria-labelledby="modelTitleId"
            style={{ display: "none" }}
            aria-hidden="true"
          >
            <div
              className="modal-dialog"
              role="document"
              style={{ maxWidth: 1000 }}
            >
              <Modal cartList={this.state.cartList} handleDelete={this.handleDelete}/>
            </div>
          </div>
          
            <Detail productSelected={this.state.productSelected}/>
          
        </section>
      </div>
    );
  }
}
