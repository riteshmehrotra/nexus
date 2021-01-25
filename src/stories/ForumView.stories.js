import React from 'react';

import forum from '../pages/forum';

export default {
  title: 'CodeMania/ForumView',
  component: forum
};

const Template = (args) => <forum {...args} />;

export const DefaultForumView = Template.bind({});