//crear la action type obliga

export  function createCourse (course) {
	//ES6 shorthand property in contrast in ES5 would be course:course
	return {type: "CREATE_COURSE" , course};
}