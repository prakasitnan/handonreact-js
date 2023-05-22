import React from 'react';
import PropTypes from 'prop-types';

ProjectForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

function ProjectForm({ onCancel }) {
  return (
    <form className="input-group vertical">
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
