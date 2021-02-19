import PropTypes from 'prop-types';

import { Wrapper, TransactionDate, Value, Comment } from './styles';

const Transaction = ({ transaction: {value, date, comment} }) => (
    <Wrapper value={value}>
        <TransactionDate>{date}</TransactionDate>
        <Value>{value.toFixed(2)}</Value>
        <Comment>{comment}</Comment>
    </Wrapper>
);

Transaction.propTypes = {
    transaction: PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.number
    })
}

Transaction.defaultProps = {
    transaction: {
        label: '',
        value: 0
    }
}

export default Transaction