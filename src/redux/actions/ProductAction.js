import fakestoreApi from "../../apis/fakestoreApi";
import { actionTypes } from "../constants/action-types";


export const fetchProducts = ()=>{
  return async (dispatch)=>{
    const response = await fakestoreApi.get('/products');
    dispatch({
        type:actionTypes.FETCH_PRODUCTS,
        payload:response.data
    })
  }
};

export const fetchProduct = (id)=>{
    return async (dispatch)=>{
      const response = await fakestoreApi.get(`/products/${id   }`);
      dispatch({
          type:actionTypes.SELECTED_PRODUCT,
          payload:response.data
      })
    }
  };
export const setProducts = (products)=>{
    return{
        type: actionTypes.SET_PRODUCTS,
        payload:products,
    };
};
export const selectedProducts = (product)=>{
    return{
        type: actionTypes.SELECTED_PRODUCT,
        payload:product,
    };
};
export const removeselectedProducts = ()=>{
    return{
        type: actionTypes.REMOVE_SELECTED_PRODUCT,
     
    };
};