import React from 'react';

import TechTalks from '../pages/recordings';

export default {
  title: 'CodeMania/TechTalks',
  component: TechTalks
};

const Template = (args) => <TechTalks {...args} />;

export const DefaultTalksView = Template.bind({});