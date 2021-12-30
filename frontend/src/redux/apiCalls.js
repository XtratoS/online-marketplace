import { loginFailure, loginStart, loginSuccess,registerFailure,registerSuccess,registerStart,logoutsuccess } from "./userRedux";
import {
  getProductStart, getProductSuccess, getProductFailure, deleteProductStart, deleteProductSuccess, 
  deleteProductFailure, updateProductStart, updateProductSuccess, updateProductFailure, addProductStart, addProductSuccess, addProductFailure} from "./productRedux";
import { publicRequest } from "../requestMethods";
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
      } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};
export const logout = async (dispatch) => {
  //dispatch(registerStart());
  try {
    //const res = await publicRequest.get("/auth/logout", user);
    dispatch(logoutsuccess());
  } catch (err) {
    console.log(err)
  }
};
///////////////// product creation
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await publicRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // update
    dispatch(updateProductSuccess({ id, product }));
    const res = await publicRequest.put(`products/${id}`, product);
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await publicRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
export const shareProduct = async (id,email, dispatch) => {
  try {
    const res = await publicRequest.get(`products/share/${id}/${email}`);
  } catch (err) {
    dispatch(addProductFailure());
  }
};