import { useState, useEffect, useCallback } from 'react';

import Balance from '../Balance';
import Transactions from '../Transactions';

import ErrorBoundary from '../ErrorBoundary';
import {ChangeBalance} from '../ChangeBalance';

import { Wrapper } from './styles'
import { STATUSES } from '../../constants';
import { useData } from '../../hooks';
import { BalanceData} from '../BalanceData';

const Home = () => {
    // const [balance, setBalance] = useState(0);

    const { transactions, hasNextPage, status, pushTransaction, onDelete, onStarClick, loadMoreRows } = useData();

    const onChange = (transaction) => {
        pushTransaction(transaction);
        // setBalance(balance + Number(transaction.value))
    }

    return (
        <ErrorBoundary>
            <Wrapper>
                <BalanceData>
                    {(balance) => <Balance balance={balance}/>}
                </BalanceData>
            
                <ChangeBalance onChange={onChange}/>
                <hr/>

                <Transactions data={transactions} 
                    isNextPageLoading={status === STATUSES.PENDING}
                    hasNextPage={hasNextPage}
                    loadMoreRows={loadMoreRows}
                    onDelete={onDelete}
                    onStarClick={onStarClick}/>
            </Wrapper>
        </ErrorBoundary>
    )
  }

  export default Home;