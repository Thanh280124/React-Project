const initialState = {count : 0}
function counterReduc(state,action) {
 switch (action.type) {
    case "incre":
        return {count: state.count + 1};
    case 'decre':
        return {count: state.count - 1};
    case "increByAmount":
        return {count: state.count + action.payload};
    case 'decreByAmount':
         return {count: state.count - action.payload};
    default:
        return state
 }
}

export {initialState,counterReduc} ;
