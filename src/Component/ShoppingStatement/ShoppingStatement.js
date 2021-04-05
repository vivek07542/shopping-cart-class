import React, { Component } from 'react'
import {connect} from "react-redux";
import ShoppingItem from "./ShoppingItem/ShoppingItem";
import * as actionType from "../../Store/redux/reducer";
import "./ShoppingStatement.css";
class ShoppingStatement extends Component {
    render() {
        let items = this.props.shoppingItem.map(list =>{
            return(<ShoppingItem
                key = {list.id}
                item = {list.item}
                id = {list.id}
                quantity = {list.quantity}
                price = {list.price}
                itemTextHandler = {this.props.onItemTextHandler}
                addQuantityHandler = {this.props.onAddQuantityHandler}
                subQuantityHandler = {this.props.onSubQuantityHandler}
                deleteItemHandler = {this.props.onDeleteItemHandler}
            />)
        })
        return (
            <div>
                <h1>Shopping Summary</h1>
                <div className="ShoppingStatement">
                {items}
                </div>
                <p style={{ fontWeight:'bold' }}>Total price : {this.props.totalAmount}</p>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        totalAmount :state.reducer.totalAmount,
        shoppingItem : state.reducer.shoppingItem
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onItemTextHandler: (id,item) =>{dispatch(actionType.editItemTextHandler(id,item))},
        onAddQuantityHandler : (id,quantity) =>{dispatch(actionType.addQuantityHandler(id,quantity))},
        onSubQuantityHandler : (id,quantity) =>{dispatch(actionType.subQuantityHandler(id,quantity))},
        onDeleteItemHandler :  (id) =>{dispatch(actionType.deleteItemHandler(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingStatement);