import React from 'react'
import Ingredient from './Ingredient'

// pass in a list of ingredients
const IngredientList = ({ list }) =>
<ul className="ingredients">
{
    list.map((ingredient, i) =>
    <Ingredient key={i} {... ingredient} />
)}
</ul>

export default IngredientList
