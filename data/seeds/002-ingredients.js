
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'H2O' },
        { ingredient_name: 'bread' },
        { ingredient_name: 'toaster' },
        { ingredient_name: 'container' }
      ]);
    });
};
