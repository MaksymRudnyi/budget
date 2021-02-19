import React from 'react';

import Transaction from '.';

export default {
  title: 'Example/Transation',
  component: Transaction,
};

const Template = (args) => <Transaction {...args} />;

export const Income = Template.bind({});
Income.args = {
    transaction: {
        comment: 'some income',
        value: 23,
        date: '13.02.2021'
    }
};