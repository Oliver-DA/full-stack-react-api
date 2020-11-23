import React from 'react';

const CreateCourseForm = ({ handleChange, handleSubmit, course, cancel }) => {

  return (

    <form onSubmit={handleSubmit}>
      <div className="grid-66">
        <div className="course--header">
          <h4 className="course--label">Course</h4>
          <div>
            <input
              onChange={handleChange}
              id="title"
              name="title"
              type="text"
              className="input-title course--title--input"
              placeholder="Course title..."
              value={course.title}
            />
          </div>
          <p>By Joe Smith</p>
        </div>
        <div className="course--description">
          <div>
            <textarea
              onChange={handleChange}
              id="description"
              name="description"
              className=""
              value={course.description}
              placeholder="Course description..."
            ></textarea>
          </div>
        </div>
      </div>
      <div className="grid-25 grid-right">
        <div className="course--stats">
          <ul className="course--stats--list">
            <li className="course--stats--list--item">
              <h4>Estimated Time</h4>
              <div>
                <input
                  onChange={handleChange}
                  id="estimatedTime"
                  name="estimatedTime"
                  type="text"
                  className="course--time--input"
                  placeholder="Hours"
                  value={course.estimatedTime}
                />
              </div>
            </li>
            <li className="course--stats--list--item">
              <h4>Materials Needed</h4>
              <div>
                <textarea
                  onChange={handleChange}
                  id="materialsNeeded"
                  name="materialsNeeded"
                  placeholder="List materials..."
                  value={course.materialsNeeded}
                ></textarea>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid-100 pad-bottom">
        <button className="button" type="submit">
          Create Course
        </button>
        <button className="button button-secondary" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
    
  );
}
 
export default CreateCourseForm;