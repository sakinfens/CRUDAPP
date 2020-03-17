const express = require('express');
const router = express.Router();
const Spots = require('../models/spots.js');

router.get('/spots/seed', (req,res)=>{
	Spots.create([
			{
				name: 'Steve',
				spot: 'Two Bros',
				address: 'West 4th',
				rating: '5'
			},
			{
				name: 'Joy',
				spot: 'Halal',
				address: '14th and 2nd',
				rating: '3'
			}
		],
		(err,data)=>{
			res.redirect('/spots')
		}
		)
})

router.get('/spots',(req,res)=>{
	Spots.find({},(error,allSpots)=>{
		res.render('index.ejs',{
			spots: allSpots
		});
	})
})
// router.get('/spots/new',(req,res)=>{
// 	res.render('new.ejs');
// })
router.get('/spots/new',(req,res)=>{
	Spots.find({},(error,allSpots)=>{
		res.render('new.ejs',{
			spots: allSpots
		});
	})
})
router.post('/spots',(req,res)=>{
	Spots.create(req.body,(error, createdSpot)=>{
		res.redirect('/spots');
	})
})
/////////////////////


router.put('/spots/:id',(req,res)=>{
	Spots.findByIdAndUpdate(req.params.id, req.body, {new:true},(error,updatedModel)=>{
		res.redirect('/spots');
	})
});
/////////////////////




router.get('/spots/:id/edit',(req,res)=>{
	console.log(req.params)
	Spots.findById(req.params.id, (error,foundSpot)=>{
		res.render('edit.ejs',{
			spots: foundSpot
		})
	})
})







router.delete('/spots/:id',(req,res)=>{
	Spots.findByIdAndRemove(req.params.id, (error, spot)=>{
		res.redirect('/spots')
	})
})

router.get('/spots/:id',(req,res)=>{
	console.log(req.params)
	Spots.findById(req.params.id, (error,foundSpot)=>{
		console.log(error)
		res.render('show.ejs',{
			spots: foundSpot
		})
	})
})

























module.exports = router;