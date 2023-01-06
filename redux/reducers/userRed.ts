export{}
const initialState = {
    users: [],
    loading: true
}

const usersReduce = (state = initialState, action: any) => {
    switch (action.type) {
        case "getUsers":
            return {
                ... state,
                usersData: action.payload,
                loading: false
            }
            default: 
            return state    
    }
}
export default usersReduce
