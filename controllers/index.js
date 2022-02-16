const router = require('express').Router();
const apiRoutes = require('./api');
// const homeRoutes = require('./home-routes');

// Sets the route apiRoutes to start with /api
router.use('/api', apiRoutes);

// router.use('/', homeRoutes);
// Must be at the botton (LEARNED THE HARD WAY)
router.use((req, res) => {
    res.status(404).end();
});



module.exports = router;