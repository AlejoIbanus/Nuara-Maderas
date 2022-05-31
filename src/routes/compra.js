const express = require('express');
const router = express.Router();
const Compra = require('../models/compra')


router.get('/compras', async (req,res) => {
    if(req.query.buscador){
        
        const compras= await Compra.find({
        proveedor:{
            $regex:req.query.buscador
        }}).lean();
        
        res.render('compras', {compras : compras});
    }else {
         const compras= await   Compra.find().lean();
         res.render('compras', {compras : compras});
    }
    
 });

 router.get('/addCompra', (req,res) => {
    res.render('addCompra')
});
 
router.post('/addCompra', async (req,res) => {
    const compra= Compra(req.body)
    await compra.save();
    res.redirect('compras');
    
});


router.post('/editCompra/:id', async (req,res) => {
    await Compra.updateOne({_id:req.params.id},req.body);
    const compras = await Compra.find().lean();
    res.render('compras',{compras:compras})
});

router.get('/editCompra/:id',async (req,res) => {
   const compras = await Compra.findById(req.params.id).lean();
   res.render('editCompra', {compras : compras})
});

router.get('/deleteCompra/:id', async (req,res)=>{
    const {id} = req.params;
    await Compra.findByIdAndDelete(id);
    const compras = await Compra.find().lean();
    res.render('compras',{compras:compras})
    
})





module.exports = router;