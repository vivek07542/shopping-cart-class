import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import "./ShoppingCart.css"
export default class ShoppingCart extends Component {

    state = {
        item : "",
        quantity : "1",
        price : ""
    }
    itemHandler=(event)=>{
        this.setState({item : event.target.value})
    }
    selectHandler=(event)=>{
        this.setState({quantity : event.target.value})
    }
    priceHandler=(event)=>{
        this.setState({price : event.target.value})
    }
    checkValidity=()=>{
        let isValid = false;
        if(this.state.item !== "" && this.state.price !== ""){
            return isValid = true;
        }
        else{
            alert("Please Fill The Details Properly");
        }
        return isValid
    }
    submitHandler = (event)=>{
        event.preventDefault();
        let valid = this.checkValidity()
        if(valid){
            this.props.submit(this.state.item, this.state.quantity, this.state.price);
            this.resetState();
        }
    }
    resetState=()=>{
        this.setState({
            item : "",
            quantity : "",
            price : ""
        })
    }
    render() {
       let form = (
           <div className="ShoppingCart">
                <label>Item :</label>
                <input type="text" placeholder="Product Name" onChange={this.itemHandler} value = {this.state.item}/>
                <label>Quantity :</label>
                <select onChange={this.selectHandler}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <label>Price :</label>
                <input type="number" placeholder="Product Price" onChange={this.priceHandler} value = {this.state.price}/>
                <Button variant="outlined" color="primary" onClick = {this.submitHandler}>Submit</Button>
            </div>
        )
        return (
            <div className="container">
                <h1>Shopping Cart</h1>
                {form}
            </div>
        )
    }
}