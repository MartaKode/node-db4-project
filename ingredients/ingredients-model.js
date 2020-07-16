const db = require('../data/db-config')

module.exports = {
    getRecipesById
}

function getRecipesById (ingredient_id) {
    return db('ingredients as i')
    .select('i.id as ingredient_id', 'i.ingredient_name', 'r.recipe_name as used_in_recipe')
    .join('recipes as r', 'r.id', 'i.recipe_id')
    .where('i.id','=', ingredient_id)
}