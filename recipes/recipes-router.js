const router = require('express').Router()

const RecipesDB = require('./recipes-model')

//````````GET````````
//get recipes
router.get('/', (req, res) => {
    RecipesDB.getRecipes()
    .then(recipes => {
        console.log(recipes)
        res.json(recipes)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

//get ingredients by recipe id
router.get('/:id/shoppingList', (req, res) => {
    RecipesDB.getShoppingList(req.params.id)
    .then(shoppingList => {
        console.log(shoppingList)
        res.json(shoppingList)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

//get instructions by recipe id
router.get('/:id/instructions', (req, res) => {
    RecipesDB.getInstructions(req.params.id)
    .then(instructions =>{
        console.log(instructions)
        res.json(instructions)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

module.exports = router