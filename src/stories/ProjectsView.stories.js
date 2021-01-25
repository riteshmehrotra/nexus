import React from 'react';

import Projects from '../pages/lab';

export default {
  title: 'CodeMania/ProjectsView',
  component: Projects
};

const Template = (args) => <Projects {...args} />;

export const DefaultProjectsView = Template.bind({});