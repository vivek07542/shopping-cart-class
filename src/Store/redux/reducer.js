// Action Type
export const INIT = "INIT";

export const CREATE_ITEM_INIT = "CREATE_ITEM_INIT";

export const CREATE_ITEM_SUCCESS = "CREATE_ITEM_SUCCESS";

export const EDIT_TEXT_ITEM_INIT = "EDIT_TEXT_ITEM_INIT";

export const EDIT_TEXT_ITEM_SUCCESS = "EDIT_TEXT_ITEM_SUCCESS";

export const ADD_QUANTITY_INIT = "ADD_QUANTITY_INIT";

export const ADD_QUANTITY_SUCCESS = "ADD_QUANTITY_SUCCESS";

export const SUB_QUANTITY_INIT = "SUB_QUANTITY_INIT";

export const SUB_QUANTITY_SUCCESS = "SUB_QUANTITY_SUCCESS";

export const DELETE_ITEM_INIT = "DELETE_ITEM_INIT";

export const DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS";


// Action Create
export const initilizeHandler = ()=>{
    return{
        type:INIT
    }
}

export const createItemHandler = (item,quantity,price)=>{
    return{
        type:CREATE_ITEM_INIT,
        item : item,
        quantity : +quantity,
        price:+price
    }
}

export const createItemSuccess = (shoppingApp)=>{
    return{
        type:CREATE_ITEM_SUCCESS,
        editmode : shoppingApp.editMode,
        editData : shoppingApp.editData,
        shoppingItem : shoppingApp.shoppingItem,
        totalAmount : shoppingApp.totalAmount
    }
}

export const editItemTextHandler=(id,item)=>{
    return{
        type : EDIT_TEXT_ITEM_INIT,
        id : id,
        item : item
    }
}

export const editItemTextHandlerSuccess = (shoppingApp)=>{
    return{
        type:EDIT_TEXT_ITEM_SUCCESS,
        shoppingApp : shoppingApp
    }
}

export const addQuantityHandler =(id,quantity) =>{
    return{
        type : ADD_QUANTITY_INIT,
        id : id,
            quantity:quantity
    }
}

export const addQuantityHandlerSuccess =(shoppingApp) =>{
    return{
        type:ADD_QUANTITY_SUCCESS,
        shoppingApp : shoppingApp
    }
}

export const subQuantityHandler =(id,quantity) =>{
    return{
        type : SUB_QUANTITY_INIT,
        id : id,
        quantity:quantity
    }
}

export const subQuantityHandlerSuccess =(shoppingApp) =>{
    return{
        type:SUB_QUANTITY_SUCCESS,
        shoppingApp : shoppingApp
    }
}

export const deleteItemHandler =(id) =>{
    return{
        type : DELETE_ITEM_INIT,
        id : id 
    }
}

export const deleteItemHandlerSuccess =(shoppingApp) =>{
    return{
        type:DELETE_ITEM_SUCCESS,
        shoppingApp : shoppingApp
    }
}

// Reducer

const initialState = {
    totalAmount:0,
    shoppingItem:[],
    editMode : false,
    editData : null
}

const reducer = (state = initialState,action)=>{
    switch(action.type){
        case CREATE_ITEM_SUCCESS:
            return{
                ...state,
                editData : action.editData,
                editMode : action.editMode,
                shoppingItem:action.shoppingItem,
                totalAmount :action.totalAmount
            }
            case ADD_QUANTITY_SUCCESS:
                return{
                    ...state,
                    shoppingItem:action.shoppingApp.shoppingItem,
                    totalAmount :action.shoppingApp.totalAmount 
                }
            case SUB_QUANTITY_SUCCESS:
                return{
                    ...state,
                    shoppingItem:action.shoppingApp.shoppingItem,
                    totalAmount :action.shoppingApp.totalAmount 
                }    
            case DELETE_ITEM_SUCCESS:
                return{
                    ...state,
                    shoppingItem:action.shoppingApp.shoppingItem,
                    totalAmount :action.shoppingApp.totalAmount 
                }    
            case EDIT_TEXT_ITEM_SUCCESS:
                return{
                    ...state,
                    shoppingItem:action.shoppingApp.shoppingItem
                }
        
        default:
            return state    
    }
}

export default reducer;