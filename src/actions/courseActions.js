import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export  function loadCoursesSuccess (courses) {
	//ES6 shorthand property in contrast in ES5 would be course:course
	return {type: types.LOAD_COURSES_SUCCESS , courses};
}

//a thunk always return a function tha accepts a dispatch
export function loadCourses (){
	return function(dispatch){
		return courseApi.getAllCourses().then(courses =>{
			dispatch(loadCoursesSuccess(courses));
		}).catch(error => {
			throw(error);
		});
	};
}