
exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments()

            tbl.text('recipe_name', 128).unique().notNullable()
        })

//--------
        .createTable('ingredients', tbl => {
            tbl.increments()

            tbl.text('ingredient_name', 128).notNullable()
           // tbl.float('quantity').unsigned().notNullable() //--> move to the recipe_ingredients table
           // tbl.string('measure').notNullable() //--> move to the recipe_ingredients table

            // tbl.integer('recipe_id')
            // .unsigned()
            // .notNullable()
            // .references('recipes.id')
            // .onUpdate('CASCADE') --> for foregin keys
            // .onDelete('CASCADE') --> for foregin keys
        }) 
        //many recipes to many ingredients --> third table 
        .createTable('recipe_ingredients', tbl => {
            tbl.increments()

            tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipes.id')

            tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredients.id')

            tbl.float('quantity').unsigned().notNullable() //--> move to the recipe_ingredients table
            tbl.string('measure').notNullable() //--> move to the recipe_ingredients table
        })

//-------
        .createTable('instructions', tbl => {
            tbl.increments()

            tbl.text('step_number').unsigned().notNullable()
            tbl.text('instructions').notNullable()

            tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipes.id')
        })
        //one recipe to one instruction?
};

exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
