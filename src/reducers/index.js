import {combineReducers} from 'redux';

//Pain attetion how to name the alias of the reducers 
//this is what going to be used
//along the rootreducer to reference the reducer and through the app
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallInProgress from './ajaxStatusReducer'

const rootReducer = combineReducers ({
	//use better the shorthand ES6 form than courses: courses
	courses,
	authors,
	ajaxCallInProgress

});

export default rootReducer; 