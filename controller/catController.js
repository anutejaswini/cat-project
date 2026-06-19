const axios=require('axios'); const Cat=require('../models/CatGallery');
exports.getCats=async(req,res)=>{const r=await axios.get('https://api.thecatapi.com/v1/images/search?limit=10',{headers:{'x-api-key':process.env.CAT_API_KEY}}); res.json(r.data);};
exports.create=async(req,res)=>res.json(await Cat.create({...req.body,user:req.user.id}));
exports.all=async(req,res)=>res.json(await Cat.find());
exports.one=async(req,res)=>res.json(await Cat.findById(req.params.id));
exports.update=async(req,res)=>res.json(await Cat.findByIdAndUpdate(req.params.id,req.body,{new:true}));
exports.remove=async(req,res)=>{await Cat.findByIdAndDelete(req.params.id); res.json({message:'Deleted'});};