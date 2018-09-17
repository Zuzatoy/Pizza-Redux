import React from 'react'

import './styles.css';

const Bacon = ({ className = '' }) => (
    <div className={`bacon ${className}`}>
        <div className="red" />
        <div className="white" />
        <div className="red" />
        <div className="bubble1" />
        <div className="bubble2" />
    </div>
)

export default Bacon;
