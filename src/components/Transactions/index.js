import PropTypes from 'prop-types';
import Transaction from '../Transaction';

const Transactions = ({ transactions = [], onDelete, onStarClick }) => {
    return transactions.map((transaction) => {
        return <Transaction key={transaction.id} 
            transaction={transaction} 
            onDelete={onDelete}
            onStarClick={onStarClick} />} )
}

Transactions.propTypes = {
    transactions: PropTypes.array
}

Transactions.defaultProps = {
    transactions: []
}

export default Transactions;