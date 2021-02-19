import React from 'react';
import {shallow} from 'enzyme';
import Transaction from '.';

describe('Transaction component', () => {
    it('should show transaction', () => {
        const props = {
            transaction: {
                value: 23,
                comment: 'test',
                date: '01.01.2020'
            }
        }
        const sut = shallow(<Transaction {...props}/>);

        expect(sut).toMatchSnapshot();
    })
})