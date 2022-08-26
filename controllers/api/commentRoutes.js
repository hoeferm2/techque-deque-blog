const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');




router.get("/", (req, res) => {
    Comment.findAll().then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).json({ msg: "womp womp", err })
    })
});


router.get("/:id", (req, res) => {
    Comment.findOne().then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).json({ msg: "womp womp", err })
    })
});


router.get("post/:id/comment/:id", (req, res) => {
    Comment.findOne().then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).json({ msg: "womp womp", err })
    })
});

router.post('post/:id/comment', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;