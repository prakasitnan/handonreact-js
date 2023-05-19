import React from 'react';
import PropTypes from 'prop-types';
import { Project } from './Project';

function ProjectList({ projects }) {
  return <pre>{JSON.stringify(projects, null, ' ')}</pre>;
}

ProjectList.propTypes = {
  pprojects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired,
};
export default ProjectList;
