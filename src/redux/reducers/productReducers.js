const SET_PRODUCTS = "SET_PRODUCTS";
const SELECTED_PRODUCT = "SELECTED_PRODUCT";
const REMOVE_SELECTED_PRODUCT = "REMOVE_SELECTED_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";

let initialState = {
    products: [],
  };

let itemsList = {
  items: [],
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state, products: action.payload
      };
    default:
      return state;
  }
};


export const selectedProductReducer = (state ={}, action) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export const addProductReducer = (state = itemsList, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {...state, items:[...state.items, action.payload]};
      case DELETE_PRODUCT:
        return {...state, 
          items: state.items.filter(x => x.id !== action.payload.id)}
    default:
      return state;
  }
};


export const setProducts  = (products) => ({
    type: SET_PRODUCTS,
    payload: products
});

export const selectedProduct = (product) => ({
    type: SELECTED_PRODUCT,
    payload: product,
});


export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});
export const deleteProduct = (product) => ({
  type: DELETE_PRODUCT,
  payload: product,
});