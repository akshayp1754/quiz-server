const express = require('express')
const router = express.Router()
const categories = require('../models/category')

router.route('/category').post((req, res) => {
    const input = req.body.input
   const inputField = req.body.inputField
    
    const newCategory = new categories({
       input,
       inputField
        
    })

    newCategory.save()
})




module.exports = router;