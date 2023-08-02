const express = require('express')
const router = express.Router()
const categories = require('../models/category')

router.route('/category').post((req, res) => {
    const description = req.body.description
   
    
    const newCategory = new categories({
        description,
        
    })

    newCategory.save()
})

// router.route("/test").get((req, res) => {
//     categories.find().then((foundQue) => res.json(foundQue));
//   });


module.exports = router;