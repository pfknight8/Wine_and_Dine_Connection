const { Router } = require('express')
const { WineController, MealController } = require('../controllers')
const router = Router()

// Routes for the wines page
router.post('/wines', WineController.placeWine)

router.get('/wines/winelist', WineController.getAllWines)

router.get('/wines/:id', WineController.getWine)

router.put('/wines/:id', WineController.updateWine)

router.delete('/wines/:id', WineController.deleteWine)

// Routes for the meals page
router.post('/meals', MealController.placeMeal)

router.get('/meals/mealCards', MealController.getAllMeals)

router.get('meals/:id', MealController.getMeal)

router.put('/meals/:id', MealController.updateMeal)

router.delete('meals/:id', MealController.deleteMeal)

module.exports = router