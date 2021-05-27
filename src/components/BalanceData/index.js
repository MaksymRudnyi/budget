import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const BalanceData = ({children}) => {
    const [balance] = useState(12);

    return children(balance)
}

BalanceData.propsTypes = {
    children: PropTypes.func.isRequired
}