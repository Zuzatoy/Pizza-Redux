import React from 'react'

import './styles.css';

const Buttons = ({ className = '' }) => (
    <div className={`button ${className}`}>
    <button className="button button1">Add bacon</button>
    <button className="button button3">Remove bacon</button>
    <button className="button button1">Add cheese</button>
    <button className="button button3">Remove cheese</button>
    <button className="button button1">Add onion</button>
    <button className="button button3">Remove onion</button>
    <button className="button button1">Add mushroom</button>
    <button className="button button3">Remove mushroom</button>
    <button className="button button1">Add tomato</button>
    <button className="button button3">Remove tomato</button>
    </div>
)

export default Buttons;
