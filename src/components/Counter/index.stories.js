import React from 'react';

import Counter from '.';

export default {
  title: 'Example/Counter',
  component: Counter,
};

const Template = (args) => <Counter {...args} />;

export const Income = Template.bind({});
Income.args = {};