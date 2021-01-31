import React, { Component } from "react";
import Detail from "./detail";
import Header from "./header";
import Products from "./productList";


export default class MainRender extends Component {
    state = ({
        
    });
  render() {
    return (
      <div>
       <Header/>
       <Products/>
       <Detail/>
      </div>
    );
  }
}
