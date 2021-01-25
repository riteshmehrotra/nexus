import React from 'react';

import ProjectCard from '../pages/components/ProjectCard'

export default {
  title: 'CodeMania/Project',
  component: ProjectCard
};

const Template = (args) => <ProjectCard {...args} />;

export const DefaultProjectCard = Template.bind({});
DefaultProjectCard.args = {
  author: "Ritesh",
  projectTitle:"ReactJS",
  description:"New React project"
}

export const ActiveProjectCard = Template.bind({});
ActiveProjectCard.args = {
  author: "Ritesh",
  projectTitle:"ReactJS",
  description:"New React project",
  isActive:true
}

export const InactiveProjectCard = Template.bind({});
InactiveProjectCard.args = {
  author: "Ritesh",
  projectTitle:"ReactJS",
  description:"New React project",
  isActive:false
}