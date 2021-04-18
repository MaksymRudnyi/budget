import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";

import Transaction from '../Transaction';

const Transactions = ({data, loadMoreRows, onDelete, onStarClick, isNextPageLoading, hasNextPage}) => {
    const isItemLoaded = index => !hasNextPage || index < data.length;
    const loadMoreItems = isNextPageLoading ? () => {} : loadMoreRows;
    const itemCount = hasNextPage ? data.length + 1 : data.length;
    
    return (
        <div style={{height: 'calc(100vh - 127px)'}}>
            <AutoSizer>
                {({ height, width }) => (
                    <InfiniteLoader
                        isItemLoaded={isItemLoaded}
                        itemCount={itemCount}
                        loadMoreItems={loadMoreItems}
                    >
                        {({ onItemsRendered, ref }) => (
                            <List
                                className="List"
                                height={height}
                                itemCount={itemCount}
                                itemSize={46}
                                width={width}
                                itemData={data}
                                ref={ref}
                                onItemsRendered={onItemsRendered}
                            >
                                {({index, style, data}) => {
                                    if (!data[index]) {
                                        return null
                                    };

                                    return (
                                        <div style={style}>
                                            <Transaction key={data[index].id} 
                                                        transaction={data[index]} 
                                                        onDelete={onDelete}
                                                        onStarClick={onStarClick} />
                                        </div>
                                    )
                                }}
                            </List>
                        )}
                    </InfiniteLoader>
                )}
            </AutoSizer>
        </div>
    )
}

export default Transactions;