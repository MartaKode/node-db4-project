
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 1, measure: 'glass'},
        {recipe_id: 2, ingredient_id: 2, quantity: 1, measure: 'slice'},
        {recipe_id: 2, ingredient_id: 3, quantity:1, measure: 'of any kind'},
        {recipe_id: 3, ingredient_id: 1, quantity: 1, measure: 'cup'},
        {recipe_id: 3, ingredient_id: 4, quantity:1, measure: 'of any kind'},
      ]);
    });
};
