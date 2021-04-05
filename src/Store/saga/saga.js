import * as actionType from "../redux/reducer";
import {put} from "redux-saga/effects"
// 1)To initilize local Storage and Clear the Local Storage
export function* initilizeHandlerSaga(){
    window.localStorage.clear();
    const shoppingApp  = {
        editMode : false,
        totalAmount : 0,
        shoppingItem : [],
        editData:null
    }
    yield localStorage.setItem("shoppingApp",JSON.stringify(shoppingApp));
}
// 2) To Create Cart in Local Storage
export function* createItemSaga(action){
    const localValue = JSON.parse(localStorage.getItem("shoppingApp"));
    const updateValue = {...localValue};
    let shoppingItemLast = null;
    if(updateValue.shoppingItem.length !== 0){
       const shoppingItemLastItem = updateValue.shoppingItem[updateValue.shoppingItem.length-1];
        shoppingItemLast = shoppingItemLastItem.id
    }
    else{
        shoppingItemLast = 0
    }
    const itemObject = {
        id:+shoppingItemLast + 1,
        item:action.item,
        quantity:action.quantity,
        price : action.price,
        amount: (action.quantity * action.price)
    }
    updateValue.shoppingItem.push(itemObject);
    const fetchTotalAmount = updateValue.shoppingItem.map(x=>x.amount).reduce((a,c) => a+c);
    updateValue.totalAmount = fetchTotalAmount;
    updateValue.editMode = false;
    yield localStorage.setItem("shoppingApp",JSON.stringify(updateValue));
    yield put (actionType.createItemSuccess(updateValue));
}

export function* editTextHandlerSaga(action){
    const localValue = JSON.parse(localStorage.getItem("shoppingApp"));
       const updateValue = {...localValue};
       const editObjIndex = updateValue.shoppingItem.findIndex(item => item.id === action.id)
       updateValue.shoppingItem[editObjIndex].item = action.item;
       yield localStorage.setItem("shoppingApp",JSON.stringify(updateValue));
       yield put (actionType.editItemTextHandlerSuccess(updateValue));
   }
   export function* addHandlerSaga(action){
    const localValue = JSON.parse(localStorage.getItem("shoppingApp"));
       const updateValue = {...localValue};
       const editObjIndex = updateValue.shoppingItem.findIndex(item => item.id === action.id)
       const editedItem = updateValue.shoppingItem[editObjIndex];
       editedItem.quantity = action.quantity +1 ;
       editedItem.amount = editedItem.quantity * editedItem.amount
       const fetchTotalAmount = updateValue.shoppingItem.map(x=>x.amount).reduce((a,c) => a+c);
       updateValue.totalAmount = fetchTotalAmount;
       yield localStorage.setItem("shoppingApp",JSON.stringify(updateValue));
       yield put (actionType.addQuantityHandlerSuccess(updateValue));
   }
   export function* subHandlerSaga(action){
    const localValue = JSON.parse(localStorage.getItem("shoppingApp"));
       const updateValue = {...localValue};
       const editObjIndex = updateValue.shoppingItem.findIndex(item => item.id === action.id)
       const editedItem = updateValue.shoppingItem[editObjIndex];
       editedItem.quantity = action.quantity -1 ;
       editedItem.amount = editedItem.quantity * editedItem.amount
       const fetchTotalAmount = updateValue.shoppingItem.map(x=>x.amount).reduce((a,c) => a+c);
       updateValue.totalAmount = fetchTotalAmount;
       yield localStorage.setItem("shoppingApp",JSON.stringify(updateValue));
       yield put (actionType.subQuantityHandlerSuccess(updateValue));
   }
   export function* deleteHandlerSaga(action){
    const localValue = JSON.parse(localStorage.getItem("shoppingApp"));
    const updateValue = {...localValue};
    const editObjIndex = updateValue.shoppingItem.findIndex(item => item.id === action.id)
    updateValue.shoppingItem.splice(editObjIndex,1);
    let fetchTotalAmount = 0
    if(updateValue.shoppingItem.length !== 0){
        fetchTotalAmount  = updateValue.shoppingItem.map(x=>x.amount).reduce((a,c) => a+c);
    }
    updateValue.totalAmount = fetchTotalAmount;
    yield localStorage.setItem("shoppingApp",JSON.stringify(updateValue));
    yield put (actionType.deleteItemHandlerSuccess(updateValue));   
   }