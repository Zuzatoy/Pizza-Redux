import React from 'react'

import './styles.css';

const Cheese = ({ className = '' }) => (
    <div className={`cheese ${className}`} />
)

export default Cheese;
