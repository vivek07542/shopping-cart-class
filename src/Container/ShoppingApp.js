import React, { Component } from 'react';
import ShoppingCart from "../Component/ShoppingCart/ShoppingCart";
import ShoppingStatement from "../Component/ShoppingStatement/ShoppingStatement";
import {connect} from "react-redux"
import * as shoppingAction from "../Store/redux/reducer";

class ShoppingApp extends Component {
    componentDidMount(){
        this.props.onInitilizing();
    }
    render() {
        return (
            <div>
                <ShoppingCart submit={this.props.onCreateItem}/>
                <ShoppingStatement />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onInitilizing : ()=>{dispatch(shoppingAction.initilizeHandler())},  
        onCreateItem : (item,quantity,price) =>{dispatch(shoppingAction.createItemHandler(item,quantity,price))},
    }
}
export default connect(null,mapDispatchToProps)(ShoppingApp);