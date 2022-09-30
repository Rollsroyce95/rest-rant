const router = require('express').Router()

//localhost:3000/places



router.get('/', (req, res) => {
    res.send('GET /places')
})

module.exports = router
