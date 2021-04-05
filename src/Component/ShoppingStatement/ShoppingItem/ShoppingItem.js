import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import "./ShoppingItem.css";

class ShoppingItem extends Component {
    state = {
        textArea : false,
        editedText : "",
    }
    textChangeHandler=()=>{
        this.setState({textArea : true})
    }
    textEditHandler=(event)=>{
        this.setState({editedText : event.target.value});
    }
    blurEvent=()=>{
        this.props.itemTextHandler(this.props.id,this.state.editedText);
        this.resetState();
    }
    resetState = ()=>{
        this.setState({textArea : false});
    }
    render() {
        return (
            <div className="ShoppingItem">
                {!this.state.textArea ?
                 <p onDoubleClick={this.textChangeHandler}> 
                Item :
                 <span>{this.props.item}</span>
                 </p>
                 : <div onBlur={this.blurEvent}>
                 <textarea onChange={this.textEditHandler} 
                 defaultValue={this.props.item}>
                 </textarea>
                 </div>
                 }

               <div className="QuantityDiv">
               <Button variant="outlined" color="primary" onClick = {()=>this.props.addQuantityHandler(this.props.id,this.props.quantity)}><AddIcon/></Button>
               <p>Quantity : <span>{this.props.quantity}</span></p>
               <Button variant="outlined" color="primary" onClick = {()=>this.props.subQuantityHandler(this.props.id,this.props.quantity)}><RemoveIcon/></Button>
               <Button variant="outlined" color="primary" onClick = {()=>this.props.deleteItemHandler(this.props.id)}><DeleteIcon/></Button>
               </div>
               <p>Amount :<span>{this.props.quantity * this.props.price}</span> </p> 

            </div>
        )
    }
}
export default ShoppingItem;