import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props, context){
    super(props, context);
    /*this.state= {
      course: {title : ""}
    };*/
    //En ES6 no se hace autobinding como en ES5 hay q hacerlos a pata
      //po performance no ponerlo en el markup onChange={this.onTitleChange.bind(this)} q cada vez q renderea generaria una funcion 
     // this.onTitleChange = this.onTitleChange.bind(this);
      //this.onClickSave = this.onClickSave.bind(this);
  }

 /* onTitleChange (event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }*/

  //onClickSave () {
    //this is a very verbose way to dispatch an action
    //this.props.dispatch(courseActions.createCourse(this.state.course)) ;
    //another clearear  approach is with the mapDispatchToProps
   // this.props.actions.createCourse(this.state.course);
  //}

  courseRow(course, index){
    return <div key={index}>{course.title} </div>;
  }

  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses} />

       {/*<h2>Add Course</h2>
        <input
        type="text"
        onChange={this.onTitleChange}
        value= {this.state.course.title} />

        <input
        type="submit"
        onClick={this.onClickSave}
        value="Save" />*/} 
      </div>
    );
  }
}

CoursesPage.propTypes ={
  //No longer use due to dispatch is no longer be injected in props because 
  //we added the mapDispatchToProps
  //dispatch: PropTypes.func.isRequired,
  courses : PropTypes.array.isRequired,

  //with bindActionCreator is not anymore a func but an obect of func
 // createCourse: PropTypes.func.isRequired,
  actions : PropTypes.object.isRequired
};

//2) approach with mapDispatchToProps instead of dispatch directly 
function mapDispatchToProps (dispatch){
  return{ 
    //still verbose
    //createCourse: course => dispatch(courseActions.createCourse(course))
    //3) import bindActionCreators 
    actions: bindActionCreators(courseActions, dispatch)
  };
}
function mapStateToProps(state, ownProps){
  return{
    courses: state.courses // courses es como decidi llamarle en el reducer
  };
}

//In this file 3 way to dispatch actions are shown 

//1) mapDispatchToProps can be omitted when is omitted the
//the component automatically gets a dispatch property
//is a fucntion to fire the actons define in courseActions

// es lo mismo nada mas que mas functional programming oriented 
//it takes the result form one function and passing it to the next function
// const connectStateAndProps = connect(mapStateToProps, mapDispatchToProps)
//export default connectStateAndProps(CoursesPage)
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);