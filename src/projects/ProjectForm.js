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

  const handleSubmit = (event) => {
    event.preventDefault();
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
  };

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
      <label htmlFor="description">Project Description</label>
      <textarea
        name="description"
        placeholder="enter description"
        value={project.description}
        onChange={handleChange}
      />
      <label htmlFor="budget">Project Budget</label>
      <input
        type="number"
        name="budget"
        placeholder="enter budget"
        value={project.budget}
        onChange={handleChange}
      />
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
