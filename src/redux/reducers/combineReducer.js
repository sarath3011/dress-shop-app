import { productReducer } from "./productReducer";
import { combineReducers } from "redux";
import { selectedProducts } from "../actions/ProductAction";
const reducers = combineReducers({
    allproducts:productReducer,
    product:selectedProducts
})
export default reducers;