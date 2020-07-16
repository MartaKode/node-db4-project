
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {recipe_id: 1, ingredient_name: 'H2O', quantity: 1, measure: 'glass'},
        {recipe_id: 2, ingredient_name: 'bread', quantity: 1, measure: 'slice'},
        {recipe_id: 2, ingredient_name: 'toaster', quantity:1, measure: 'of any kind'},
        {recipe_id: 3, ingredient_name: 'H2O', quantity: 1, measure: 'cup'},
        {recipe_id: 3, ingredient_name: 'container', quantity:1, measure: 'of any kind'}
      ]);
    });
};
