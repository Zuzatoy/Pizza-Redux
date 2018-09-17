import React from 'react'
import { connect } from 'react-redux';

import { addIngredient, removeIngredient } from '../../actions/ingredients';

import './styles.css';

const Buttons = ({ ingredients, toggleIngredient }) => (
    <div className="buttonGroup">
        <button
            className="button button1"
            onClick={() => toggleIngredient(ingredients.bacon, 'bacon')}
        >
            {ingredients.bacon ? 'Remove' : 'Add'} bacon
        </button>
        <button className="button button1"
        onClick={() => toggleIngredient(ingredients.cheese, 'cheese')}
        > {ingredients.cheese ? 'Remove' : 'Add'} cheese
        </button>
        <button className="button button1"
        onClick={() => toggleIngredient(ingredients.onion, 'onion')}
        > {ingredients.onion ? 'Remove' : 'Add'} onion
        </button>
        <button className="button button1"
        onClick={() => toggleIngredient(ingredients.mushroom, 'mushroom')}
        > {ingredients.mushroom ? 'Remove' : 'Add'} mushroom
        </button>
        <button className="button button1"
        onClick={() => toggleIngredient(ingredients.tomato, 'tomato')}
        > {ingredients.tomato ? 'Remove' : 'Add'} tomato
        </button>
    </div>
)

const mapStateToProps = (state) => ({
    ingredients: state.ingredients
}) 

const mapDispatchToProps = (dispatch) => ({
    toggleIngredient: (isTurnedOn, name) => dispatch(isTurnedOn ? removeIngredient(name) : addIngredient(name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Buttons)
