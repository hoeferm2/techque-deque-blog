const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
    User.findAll({
        include: [Post]
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).json({ msg: "womp womp", err })
    })
})

module.exports = router;