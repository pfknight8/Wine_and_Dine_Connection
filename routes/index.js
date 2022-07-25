const { Router } = require('express')
const { WineController, MealController } = require('../controllers')
const router = Router()

// Routes for the wines page
router.get('/wines/winelist', WineController.getAllWines)

router.get('/wines/:id', WineController.getWine)

router.post('/wines', WineController.placeWine)

router.put('/wines', WineController.updateWine)

// Routes for the meals page
// router.get()

// router.post()

// router.put()

// router.delete()

module.exports = router