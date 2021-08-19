const express = require('express');
const authRoute = require('./auth.route');
const router = express.Router();

const routeIndex = [
    {
        path:'/auth',
        route:authRoute
    }
]

//router.use('/auth', ()=>{})

routesIndex.forEach((route)=>{
    router.use(route.path, route.route);
})

module.exports = router;