import PropTypes from 'prop-types';
import Transaction from '../Transaction';

const Transactions = ({ transactions = [] }) => transactions.map((transaction) => <Transaction key={transaction.id} transaction={transaction}/>)

Transactions.propTypes = {
    transactions: PropTypes.array
}

Transactions.defaultProps = {
    transactions: []
}

export default Transactions;