import * as types from './actionTypes';
import authorApi from '../api/mockAuthorApi';

export  function loadAuthorsSuccess (authors) {
	//ES6 shorthand property in contrast in ES5 would be course:course
	return {type: types.LOAD_AUTHORS_SUCCESS , authors};
}

//a thunk always return a function tha accepts a dispatch
export function loadAuthors (){
	return function(dispatch){
		return authorApi.getAllAuthors().then(authors =>{
			dispatch(loadAuthorsSuccess(authors));
		}).catch(error => {
			throw(error);
		});
	};
}