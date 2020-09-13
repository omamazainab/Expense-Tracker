export default (state,action) => {
    switch(action){
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transaction: [action.payload,...state.transaction]
            }
        default:
            return state
    }
}