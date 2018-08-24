// A reducer is a function that receives and state and action and return a new state

import * as types from '../actions/actionTypes';

//in ES6 ones can define a default in the input parameters
//the state=[] represents the list of course
export default function courseReducer (state=[], action ){
	switch (action.type) {
		case types.CREATE_COURSE :

		//returns a brand-new state that contains the course passed in the action 
		// The next code is wrong because the inmutabllty of state
		// state.push(action.course)
		//return state;
		
			return [...state, 
					Object.assign({}, action.course)];

		default: 
			return state;
	}

}