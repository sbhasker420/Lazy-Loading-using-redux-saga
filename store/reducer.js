// import * as actionTypes from "./actionTypes";
// import fetchSaga from "../saga/fetchSaga";

// const initialState = {
//   counter: 0,
//   list: [],
//   limit: 30
// };
/*
function addData(){
  return function(dispatch) {
  return fetch(
    `https://jsonplaceholder.typicode.com/photos?_limit=${state.limit}&_start=${state.counter}`
  )
    .then(response => response.json())
    .then(data => state.list.concat(data));
    dispatch({type:FETCH_DATA});
}
}
*/
const initialState = {
  counter: 0,
  list: [],
  limit: 30
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state
        //counter: state.counter + state.limit,
        //limit: 10
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        list: [...action.list]
      };
  }

  return state;
};

export default reducer;
