import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Project } from './Project';

ProjectForm.propTypes = {
  project: PropTypes.instanceOf(Project),
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

function ProjectForm({ project: initiaProject, onSave, onCancel }) {
  const [project, setProject] = useState(initiaProject);
  const [errors, setErrors] = useState({
    name: '',
    description: '',
    budget: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid()) return;
    onSave(project);
  };

  const handleChange = (event) => {
    const { type, name, value, checked } = event.target;
    // if input type is checkbox use checked
    // otherwirse it's type is text, number etc. so use value
    let updatedValue = type === 'checkbox' ? checked : value;

    //if input type is number convert the updatedValue string to a +number
    if (type === 'number') {
      updatedValue = Number(updatedValue);
    }
    const change = {
      [name]: updatedValue,
    };

    let updatedProject;
    // need to do functional update b/c
    // the new project state is based on the previous project state
    // so we can keep the project properties that aren't being edited +like project.id
    // the soread operator (...) is use to
    // spread the previous project properties and the new change
    setProject((p) => {
      updatedProject = new Project({ ...p, ...change });
      return updatedProject;
    });
    setErrors(() => validate(updatedProject));
  };

  function validate(project) {
    let errors = { name: '', description: '', budget: '' };
    if (project.name.length === 0) {
      errors.name = 'Name is required';
    }
    if (project.name.length > 0 && project.name.length < 3) {
      errors.name = 'Name needs to be at least 3 characters.';
    }
    if (project.description.length === 0) {
      errors.description = 'Description is required.';
    }
    if (project.budget === 0) {
      errors.budget = 'Budget must be more than $0.';
    }
    return errors;
  }

  function isValid() {
    return (
      errors.name.length === 0 &&
      errors.description.length === 0 &&
      errors.budget.length === 0
    );
  }

  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="name">Prooject Name</label>
      <input
        type="text"
        name="name"
        placeholder="enter name"
        value={project.name}
        onChange={handleChange}
      />
      {errors.name.length > 0 && (
        <div className="card error">
          <p>{errors.name}</p>
        </div>
      )}
      <label htmlFor="description">Project Description</label>
      <textarea
        name="description"
        placeholder="enter description"
        value={project.description}
        onChange={handleChange}
      />
      {errors.description.length > 0 && (
        <div className="card error">
          <p>{errors.description}</p>
        </div>
      )}
      <label htmlFor="budget">Project Budget</label>
      <input
        type="number"
        name="budget"
        placeholder="enter budget"
        value={project.budget}
        onChange={handleChange}
      />
      {errors.budget.length > 0 && (
        <div className="card error">
          <p>{errors.budget}</p>
        </div>
      )}
      <label htmlFor="isActive">Active</label>
      <input
        type="checkbox"
        name="isActive"
        checked={project.isActive}
        onChange={handleChange}
      />
      <div className="inpit-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button type="button" className="bordered mudium" onClick={onCancel}>
          cancel
        </button>
      </div>
    </form>
  );
}
export default ProjectForm;
