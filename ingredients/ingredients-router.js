const router = require('express').Router()

const IngredientsDB = require('./ingredients-model')

//``````GET```````
//get recipes by ingredient id
router.get('/:id/recipes', (req, res) => {
    IngredientsDB.getRecipesById(req.params.id)
    .then(recipes => {
        console.log(recipes)
        res.json(recipes)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

module.exports = router