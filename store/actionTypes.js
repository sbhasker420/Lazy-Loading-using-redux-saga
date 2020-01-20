export const fetchData = () => {
  return { type: "FETCH_DATA" };
};
export const fetchDataSuccess = data => {
  return { type: "FETCH_DATA_SUCCESS", list: data };
};
