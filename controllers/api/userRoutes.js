const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt")
const { User, Post } = require('../../models');

router.get("/", (req, res) => {
    User.findAll({
        include: [Post]
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).json({ msg: "womp womp", err })
    })
})

router.get("/:userId", (req, res) => {
    User.findOne({
        include: [Post]
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).json({ msg: "womp womp", err })
    })
})

router.post("/", (req, res) => {
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }).then(data => {
        req.session.userId = data.id;
        req.session.isUser = true;
        req.session.loggedIn = true;
        res.json(data)
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "womp womp", err })
    })
})

//TODO: delete route
// router.delete("/:userId" (req,res))
//TODO: update route


router.post("/login", (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(foundUser => {
        if (!foundUser) {
            return res.status(401).json({ msg: "invalid login" })
        }
        if (!bcrypt.compareSync(req.body.password, foundUser.password)) {
            return res.status(401).json({ msg: "invalid login" })
        }
        req.session.userId = foundUser.id;
        req.session.isUser = true;
        req.session.loggedIn = true;
        res.json(foundUser);
    })
})



module.exports = router;