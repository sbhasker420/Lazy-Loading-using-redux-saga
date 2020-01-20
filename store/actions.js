import * as actionTypes from "./actionsTypes";
import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com/photos";
export const fetchData = data => {
  return {
    type: actionTypes.FETCH_DATA,
    data
  };
};

export const onFetchData = () => {
  return dispatch => {
    return axios.get(apiUrl).then(response => {
      dispatch(fetchData(response.data));
    });
  };
};

//`https://jsonplaceholder.typicode.com/photos?_limit=${props.limit}&_start=${props.counter}`

// fetch("https://jsonplaceholder.typicode.com/photos?_limit=100")
//   .then(response => response.json())
//   .then(data => dispatch(addData(data)));
// // state.list.concat(data)
