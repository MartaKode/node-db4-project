const db = require('../data/db-config')

module.exports = {
    getRecipesById
}

function getRecipesById (ingredient_id) {
    return db('recipe_ingredients as ri')
    .select('i.id as ingredient_id', 'i.ingredient_name', 'r.recipe_name as used_in_recipe')
    .join('recipes as r', 'r.id', 'ri.recipe_id')
    .join('ingredients as i', 'i.id', 'ri.ingredient_id')
    .where('i.id','=', ingredient_id)
}