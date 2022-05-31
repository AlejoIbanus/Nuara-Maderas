const express = require('express');
const router = express.Router();
const Cliente = require('../models/clientes');


router.get('/clientes', async (req,res) => {
    
    if(req.query.buscador){
        
        const clientes= await Cliente.find({
        name:{
            $regex:req.query.buscador
        }}).lean();
        
        res.render('clientes', {clientes : clientes});
    }else {
         const clientes= await Cliente.find().lean();
         res.render('clientes', {clientes : clientes});
    }
    
});

router.get('/addCliente', (req,res) => {
    res.render('addCliente')
});


router.post('/addCliente', async (req,res) => {
    const cliente= Cliente(req.body)
    await cliente.save();
    res.redirect('clientes');
    
});

router.get('/editClientes/:id',async (req,res) => {
    const clientes = await Cliente.findById(req.params.id).lean();
    res.render('editClientes', {clientes:clientes})
 });

 router.post('/editClientes/:id', async (req,res) => {
    
    await Cliente.updateOne({_id:req.params.id},req.body);
    
    const clientes = await Cliente.find().lean();
    res.render('clientes',{clientes:clientes})
});

router.get('/deleteCliente/:id', async (req,res)=>{
    const {id} = req.params;
   console.log(id)
    await Cliente.findByIdAndDelete(id);
    const clientes = await Cliente.find().lean();
    res.render('clientes',{clientes:clientes})
    
})



module.exports = router;