import * as types from './actionTypes';

export  function createCourse (course) {
	//ES6 shorthand property in contrast in ES5 would be course:course
	return {type: types.CREATE_COURSE , course};
}