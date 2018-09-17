import React from 'react'
import { connect } from 'react-redux';

import { Onion } from '../Onion'
import { Bacon } from '../Bacon'
import { Mushroom } from '../Mushroom'
import { Cheese } from '../Cheese'
import { Tomato } from '../Tomato'

import './styles.css'

const NUMBER_OF_INGREDIENTS = 5;

const ingredients = {
    tomato: Tomato,
    onion: Onion,
    mushroom: Mushroom,
    bacon: Bacon
}

const renderIngridient = (name, number = NUMBER_OF_INGREDIENTS) => {
    let components = [];
    for (let i = 0; i < number; i++) {
        components.push(ingredients[name]);
    }

    return (
        components.map((Component, i) => {
            const className = `${name}-${i + 1}`;

            return (
                <Component
                    key={className}
                    className={className}
                />
            )
        })
    )
}

const tomatoes = renderIngridient('tomato');
const bacons = renderIngridient('bacon');
const mushrooms = renderIngridient('mushroom');
const onions = renderIngridient('onion');

const Pizza = ({
    bacon,
    cheese,
    mushroom,
    onion,
    tomato,
}) => (
        <div className="pizza">
            <div className="crust" />
            {cheese && <Cheese />}
            {tomato && tomatoes}
            {bacon && bacons}
            {mushroom && mushrooms}
            {onion && onions}
        </div>
    )

const mapStateToProps = (state) => ({
    ...state.ingredients
})

export default connect(mapStateToProps)(Pizza)
