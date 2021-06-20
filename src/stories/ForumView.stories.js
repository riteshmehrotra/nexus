import React from 'react';

import Forum from '../pages/forum';

export default {
  title: 'CodeMania/ForumView',
  component: Forum
};

const Template = (args) => <Forum {...args} />;

export const DefaultForumView = Template.bind({});