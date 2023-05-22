import React from 'react';
import PropTypes from 'prop-types';
import { Project } from './Project';

ProjectForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

function ProjectForm({ onSave, onCancel }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(new Project({ name: 'Updated Project' }));
  };
  
  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="name">Prooject Name</label>
      <input type="text" name="name" placeholder="enter name" />
      <label htmlFor="description">Project Description</label>
      <textarea name="description" placeholder="enter description" />
      <label htmlFor="budget">Project Budget</label>
      <input type="number" name="budget" placeholder="enter budget" />
      <label htmlFor="isActive">Active</label>
      <input type="checkbox" name="isActive" />
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
