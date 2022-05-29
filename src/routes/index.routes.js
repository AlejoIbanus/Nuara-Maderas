const express = require('express');
const router = express.Router();
const Madera = require('../models/precios')

router.get('/', (req,res) => {
    res.render('index');
});

router.get('/precios', (req,res) => {
    res.render('precios');
});

router.get('/addMadera', (req,res) => {
    res.render('addMadera')
});

router.post('/addMadera', async (req,res) => {
    const madera= Madera(req.body)
    const maderaSave = await madera.save();
    console.log(maderaSave);
    res.render('precios');
    
});





module.exports = router;