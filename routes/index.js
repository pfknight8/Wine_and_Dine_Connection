const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

// Routes for the wines page
router.get('/wines/winelist', controllers.getAllWines)

router.get('/wines/:id', controllers.getWine)

router.post('/wines', controllers.placeWine)

router.put('/wines', controllers.updateWine)

// Routes for the meals page
// router.get()

// router.post()

// router.put()

// router.delete()

module.exports = router