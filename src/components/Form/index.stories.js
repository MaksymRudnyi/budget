import React from 'react';

import Form from '.';

export default {
  title: 'Example/Form',
  component: Form,
};

const Template = (args) => <Form {...args} />;

export const Income = Template.bind({});
Income.args = {
  onChange: () => {}
};