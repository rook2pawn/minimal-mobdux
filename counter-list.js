import React from 'react';
import { connect } from 'mobdux';
import Counter from './counter.js';

const DumbCounterList = ({ counterIds, onAddCounter }) => (
    <div>
        {counterIds.map(id => (
            /* here we render a SmartCounter by just giving it an id,
             * as it will lookup everything it needs to render */
            <Counter id={id} key={id} />
        ))}
        <button onClick={onAddCounter}>Add a counter</button>
    </div>
);

const SmartCounterList = connect(
    /* in this mapping function, we can wire up both the state and the actions
     * to the dumb components props in one place */
    stores => ({
        counterIds: stores.counters.ids,
        onAddCounter: () => stores.counters.addCounter(),
    }),
)(DumbCounterList);

export default SmartCounterList;
