'use strict';

function addIngredient(recipe, ingredient, amounts){
	recipe[ingredient] = amounts; //add value to key
	return recipe;
}
function removeIngredient(recipe, ingredient) {
	delete recipe[ingredient]; //remove value
	return recipe;
}
function updateIngredient(recipe, ingredient, amounts) {

	return addIngredient(recipe, ingredient, amounts); //helper function -same logic as addIngredient
}
function readRecipe(recipe) {
	var amount; //create a local variable
	for (var ingredient in recipe){ //key in object
		console.log(ingredient);
	 return	`this recipe calls for ${recipe[ingredient]}  of ${ingredient}`; //return value and key in statement
 }
}
