const router = require('express').Router();
const { Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// THESE ARE ALL API ROUTES
//GETS ALL POSTS

router.get("/", (req, res) => {
  Post.findAll({
    include: [Comment,]
  }).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json({ msg: "womp womp", err })
  })
})
//GETS POST BY ID
router.get("/:id", (req, res) => {
  Post.findOne({
    include: [Comment,]
  }).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json({ msg: "womp womp", err })
  })
});
// GET A COMMENT VIA POST ID
router.get("/:id/comment", (req, res) => {
  Comment.findOne().then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json({ msg: "womp womp", err })
  })
});

//CREATES POST
router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});
//DELETEPOST BY ID
router.delete('/:id', async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// AMEND A POST

router.put('/:id', async (req, res) => {
  try {
    const postData = await Post.update({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST A COMMENT
router.post('/:id/comment', async (req, res) => {
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
