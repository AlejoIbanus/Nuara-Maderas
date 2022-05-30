const express = require('express');
const router = express.Router();
const Venta = require('../models/ventas')


router.get('/ventas', async (req,res) => {
    const ventas= await Venta.find().lean();
   
    
     res.render('ventas', {ventas : ventas});
 });

 router.get('/addVenta', (req,res) => {
    res.render('addVenta')
});
 
router.post('/addVenta', async (req,res) => {
    const venta= Venta(req.body)
    await venta.save();
    res.redirect('ventas');
    
});


router.post('/editVenta/:id', async (req,res) => {
    await Venta.updateOne({_id:req.params.id},req.body);
    const ventas = await Venta.find().lean();
    res.render('ventas',{ventas:ventas})
});

router.get('/editVenta/:id',async (req,res) => {
   const ventas = await Venta.findById(req.params.id).lean();
   res.render('editVenta', {ventas : ventas})
});

router.get('/deleteVenta/:id', async (req,res)=>{
    const {id} = req.params;
    await Venta.findByIdAndDelete(id);
    const ventas = await Venta.find().lean();
    res.render('ventas',{ventas:ventas})
    
})





module.exports = router;