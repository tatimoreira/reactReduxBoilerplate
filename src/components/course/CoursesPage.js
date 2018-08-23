import React, {PropTypes} from 'react';


class CoursesPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state= {
      course: {title : ""}
    };
    //En ES6 no se hace autobinding como en ES5 hay q hacerlos a pata
      //po performance no ponerlo en el markup onChange={this.onTitleChange.bind(this)} q cada vez q renderea generaria una funcion 
      this.onTitleChange = this.onTitleChange.bind(this);
      this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange (event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave (event) {
    alert('Save ' + this.state.course.title);
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input
        type="text"
        onChange={this.onTitleChange}
        value= {this.state.course.title} />

        <input
        type="submit"
        onClick={this.onClickSave}
        value="Save" />
      </div>
    );
  }
}

export default CoursesPage ;