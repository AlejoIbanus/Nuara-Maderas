const express = require('express');
const router = express.Router();
const Madera = require('../models/precios');


router.get('/', (req,res) => {
    
    
    res.render('index');
});

router.get('/precios', async (req,res) => {
   const maderas = await Madera.find().lean();
   
   
    res.render('precios', {maderas : maderas});
});

router.get('/addMadera', (req,res) => {
    res.render('addMadera')
});


router.post('/addMadera', async (req,res) => {
    const madera= Madera(req.body)
    await madera.save();
    res.redirect('precios');
    
});

router.post('/edit/:id', async (req,res) => {
    await Madera.updateOne({_id:req.params.id},req.body);
    const maderas = await Madera.find().lean();
    res.render('precios',{maderas:maderas})
});

router.get('/edit/:id',async (req,res) => {
   const madera = await Madera.findById(req.params.id).lean();
   res.render('edit', {madera : madera})
});

router.get('/delete/:id', async (req,res)=>{
    const {id} = req.params;
    await Madera.findByIdAndDelete(id);
    const maderas = await Madera.find().lean();
    res.render('precios',{maderas:maderas})
    
})






module.exports = router;