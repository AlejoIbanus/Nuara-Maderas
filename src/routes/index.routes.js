const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
    res.render('index');
});

router.get('/precios', (req,res) => {
    res.render('precios');
});

router.post('/precios', (req,res) => {
    res.render('index')
});



module.exports = router;