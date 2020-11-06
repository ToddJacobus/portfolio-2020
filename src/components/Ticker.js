import React from 'react';

import {
    makeStyles,
} from '@material-ui/core';

const TickerContent = props => {
    const { 
        testimony, 
        attribution 
    } = props;

    return (
        <div>
            {testimony}
            {attribution}
        </div>
    )
};

const Ticker = props => {
    const { items } = props;
    const [index, setIndex] = React.useState(0);
    
    React.useEffect(() => {
        let currentIndex = 0
        setInterval(() => {
            currentIndex < items.length - 1 ?
              currentIndex += 1
            : currentIndex =  0

            setIndex(currentIndex);
        }, 1000)    
        
    }, [])

    return (
        <div>
            {
                items && items[index]?
                <TickerContent { ...items[index] }/>
                : <div />
            }
        </div>
    )
};

export default Ticker;