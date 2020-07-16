
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {recipe_id: 1, step_number: 1, instructions: 'pour water into a glass'},
        {recipe_id: 1, step_number: 2, instructions: 'enjoy!'},
        {recipe_id: 2, step_number: 1, instructions: 'put toast into the toaster'},
        {recipe_id: 2, step_number: 2, instructions: 'wait for the toast to pop up'},
        {recipe_id: 2, step_number: 3, instructions: 'enjoy!'},
        {recipe_id: 3, step_number: 1, instructions: 'pour water into your container'},
        {recipe_id: 3, step_number: 2, instructions: 'put into a freezer and leave overnight'},
        {recipe_id: 3, step_number: 3, instructions: 'enjoy!'}
      ]);
    });
};
