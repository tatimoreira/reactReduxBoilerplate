import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';


export class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state={
      course: Object.assign({}, props.course),
      errors: {}
    };

    this.updtaeCourseState = this.updtaeCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.course.id) {
      // Necessary to populate form when existing course is loaded directly.
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  updtaeCourseState(event){
    const field = event.target.name;
    let course = Object.assign({}, this.state.course);
    course[field] = event.target.value;
    return  this.setState({course: course});
  }

  saveCourse(event) {
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course)
      .then(()=> this.redirect());
    
  }

  redirect(){
    this.context.router.push('/courses');
  }

  render() {
    return (
      <CourseForm 
        allAuthors= {this.props.authors}
        course={this.state.course} 
        onSave ={this.saveCourse}
        onChange = {this.updtaeCourseState}
        errors={this.state.errors}
      />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes ={
  router: PropTypes.object
};

function getCourseById(courses, id){
  const course = courses.filter(course => course.id == id);
  if (course.length) return course[0];
  return null;
}


function mapStateToProps(state, ownProps) {

  const courseId = ownProps.params.id; //from the path '/course:id'

  let course = {id:'', watchHref:'', title: '', authorId:'', length:'', category:''};

  if(courseId && state.courses.length > 0){
    course = getCourseById(state.courses, courseId);
  }


  const authorFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName 
    };
  });

  return {
    course: course,
    authors: authorFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);