import { BUY_CAKE } from "../constant";

const initiaState = {
    numCake:10
}

function cakeReducer(prevState = initiaState, action) {
    
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...prevState,
                numCake: prevState.numCake -1
            }
            
    
        default:
            return prevState;
    }
}

export default cakeReducer;