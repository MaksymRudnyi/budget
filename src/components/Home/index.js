import { useState, useEffect, useCallback } from 'react';

import Balance from '../Balance';
import Transactions from '../Transactions';
import Form from '../Form';
import ErrorBoundary from '../ErrorBoundary';

import { Wrapper } from './styles'
import { STATUSES } from '../../constants';
import { useData } from '../../hooks';

const Home = () => {
    const [balance, setBalance] = useState(0);

    const { transactions, status, pushTransaction, onDelete, onStarClick } = useData();

    const onChange = (transaction) => {
        pushTransaction(transaction);
        setBalance(balance + Number(transaction.value))
    }

    return (
        <ErrorBoundary>
            <Wrapper>
                <Balance balance={balance}/>
                <Form onChange={onChange}/>
                <hr/>

                { status === STATUSES.PENDING ? (
                    <div>Loading...</div>
                ): null}

                { status === STATUSES.SUCCESS ? (
                    <Transactions transactions={transactions} 
                        onDelete={onDelete}
                        onStarClick={onStarClick}/>
                ): null}        
            </Wrapper>
        </ErrorBoundary>
    )
  }

  export default Home;