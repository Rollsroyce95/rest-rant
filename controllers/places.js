const router = require('express').Router()

//localhost:3000/places

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'images/place1.jpg/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'images/place2.jpg/250/250'
      }]
      
    res.render('places/index', {places})
})

module.exports = router
