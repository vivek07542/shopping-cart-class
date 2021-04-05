import { takeLatest } from "@redux-saga/core/effects";
import * as actionType from "../redux/reducer"; 
// import * as actionType from "../redux/shoppingStatement"; 
import {createItemSaga, initilizeHandlerSaga,editTextHandlerSaga,addHandlerSaga,subHandlerSaga,deleteHandlerSaga} from "./saga";
// import {} from "./shoppingStatement";
export function* watch(){
    yield takeLatest(actionType.INIT,initilizeHandlerSaga);
    yield takeLatest(actionType.CREATE_ITEM_INIT,createItemSaga);
    yield takeLatest(actionType.EDIT_TEXT_ITEM_INIT,editTextHandlerSaga);
    yield takeLatest(actionType.ADD_QUANTITY_INIT,addHandlerSaga);
    yield takeLatest(actionType.SUB_QUANTITY_INIT,subHandlerSaga);
    yield takeLatest(actionType.DELETE_ITEM_INIT,deleteHandlerSaga);
}