'use strict';

function addIngredient(recipe, ingredient, amounts){
	recipe[ingredient] = amounts;
	return recipe;
} 
function removeIngredient(recipe, ingredient) {
	delete recipe[ingredient];
	return recipe;
}
