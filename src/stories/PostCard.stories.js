import React from 'react';

import PostCard from '../pages/components/PostCard';

export default {
  title: 'CodeMania/PostCard',
  component: PostCard
};

const Template = (args) => <PostCard {...args} />;

export const DefaultPostCard = Template.bind({});