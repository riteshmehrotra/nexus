import React from 'react';

import Leaderboard from '../Leaderboard'

export default {
  title: 'CodeMania/Leaderboard',
  component: Leaderboard
};

const Template = (args) => <Leaderboard {...args} />;

export const DefaultLeaderBoard = Template.bind({});
DefaultLeaderBoard.args = {
  name: "Ritesh",
  points: 10,
  solutions: 1
}

