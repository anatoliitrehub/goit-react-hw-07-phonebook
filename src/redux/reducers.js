

const contactsInitialState = {
    contacts:[],
}
const filterInitialState = {
    filter:'',
}

export const contactsReducer = (state = contactsInitialState, action) => {
    switch(action.type){
        case "user/addUser":
            return{
            ...state,
            contacts:[...state.contacts,action.payload]
        }
        case "user/deleteUser":
            return{}
        
       

        default:
          return state;

    }
}

export const filterReducer = (state=filterInitialState,action) =>{
    switch(action.type){
        case "filter/change":
            return{
                ...state,
                filter:action.payload
            }
        ;
        default:
            return state;
    }
}

// export const rootReducer = (state = {},action) =>{
//     return{
//         contacts:userReducer(state.contacts,action),
//         filter:filterReducer(state.filter,action)
//     }
// }

