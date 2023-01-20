export{}
const initialState = {
    user: undefined
  };
const usersReducer = (state = initialState, action: any) => {
    console.log(state,"sandeep",action);
    switch (action.type) {
            case "SET_USER":
      const { user } = action;
      return { ...state, user };

            default: 
            return state    
    }
}
export default usersReducer;