import React from 'react'

import './styles.css';

const Mushroom = ({ className = '' }) => (
    <div className={`mushroom ${className}`}>
        <div className="cup" />
        <div className="stem" />
    </div>
)

export default Mushroom;