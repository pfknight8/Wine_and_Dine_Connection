const { Router } = require('express')
const { WineController, MealController } = require('../controllers')
const router = Router()

// Routes for the wines page
router.get('/wines/winelist', WineController.getAllWines)

router.get('/wines/:id', WineController.getWine)

router.put('/wines/:id', WineController.updateWine)

router.delete('/wines/:id', WineController.deleteWine)

router.post('/wines', WineController.placeWine)

// Routes for the meals page
// router.get()

// router.post()

// router.put()

// router.delete()

module.exports = router