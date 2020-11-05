import React from 'react';

import {
    makeStyles,
} from '@material-ui/core';


const TestimonyTicker = props => {
    const { items } = props;
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        let currentCount = 0
        setInterval(() => {
            currentCount += 1
            setCount(currentCount);
        }, 1000)
    }, [])

    return (
        <div>
            {
                items && items[count]?
                items[count].testimony
                : <div>Nothin...</div>
            }
        </div>
    )
};

export default TestimonyTicker;