const db = require('../data/db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    // return db('recipes as r')
    // .select('r.recipe_name','i.ingredient_name', 'i.quantity', 'i.measure')
    // .join('ingredients as i', 'r.id', 'i.recipe_id')
    // .where('recipe_id', '=', recipe_id)
    return db('recipe_ingredients as ri')
    .select('r.recipe_name', 'i.id as ingredient_id','i.ingredient_name', 'ri.quantity', 'ri.measure')
    .join('recipes as r', 'r.id', 'ri.recipe_id')
    .join('ingredients as i', 'i.id', 'ri.ingredient_id')
    .where('recipe_id', '=', recipe_id)
}

function getInstructions(recipe_id){
    return db('instructions')
    .join('recipes', 'instructions.recipe_id', 'recipes.id')
    .where('recipe_id', '=', recipe_id)
    .orderBy('instructions.step_number')
}