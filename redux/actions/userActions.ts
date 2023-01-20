export const GET_USER = "GET_USER";
// export const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
export const getUsersData=(userData: any)=> {
    return {
        type: "getUsers",
        payload: userData
    }
}
export const fetchPostsRequest = ()=> ({
    type: "FETCH_POST_REQUEST"
  });



export const getUser = () => ({
    type:GET_USER 
  });
 
  export const setUser = (user) => ({
    type: SET_USER,
    user
  });
