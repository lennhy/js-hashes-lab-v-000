'use strict';

function addIngredient(recipe, ingredient, amounts){
	recipe[ingredient] = amounts;
	return recipe;
} 
function removeIngredient(recipe, ingredient) {
	delete recipe[ingredient];
	return recipe;
}
function updateIngredient(recipe, ingredient, amounts) {
  
	return addIngredient(recipe, ingredient, amounts);
}
