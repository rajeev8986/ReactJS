//action creator.
const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = "BUY_CAKE"

function shopAction() {
	return {
		type: BUY_CAKE,
		info: "Buying cake"
	};
}

const initialState = {
	numOfCake: 10,
}

const cakeReducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			
			return { numOfCake: state.numOfCake - 1 };
		default:
           
			return state;
	}

}


const store = createStore(cakeReducer);
store.subscribe(() => console.log("current state:" + store.getState().numOfCake));
store.dispatch(shopAction());
store.dispatch(shopAction());
store.dispatch(shopAction());

