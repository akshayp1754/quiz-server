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

module.exports = router;