
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'water'},
        {recipe_name: 'toast'},
        {recipe_name: 'ice cubes'}
      ]);
    });
};
