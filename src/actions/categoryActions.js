import axios from "axios";
import {
  ALL_CATEGORY_REQUEST,
  ALL_CATEGORY_SUCCESS,
  ALL_CATEGORY_FAIL,
} from "../constants/categoryConstant";

export const getCategory = async (dispatch) => {
  try {
    dispatch({ type: ALL_CATEGORY_REQUEST });
    const { data } = await axios.get(
      "http://localhost/DarazApi/public/api/category"
    );

    dispatch({
      type: ALL_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("Data not retrive");
    dispatch({ type: ALL_CATEGORY_FAIL });
  }
};
