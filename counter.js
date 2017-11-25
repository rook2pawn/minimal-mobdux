import React from 'react';
import { connect } from 'mobdux';

const DumbCounter = ({ value, onClick }) => (
    <div>
        <button onClick={onClick}>+</button>
        <span>value: {value}</span>
    </div>
);

const SmartCounter = connect(
    (stores, ownProps) => ({
        value: stores.counters.byId[ownProps.id].count,
        onClick: () => stores.counters.increment(ownProps.id),
    }),
)(DumbCounter);

export default SmartCounter;
