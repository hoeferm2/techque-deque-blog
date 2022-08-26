const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Follow this template for posts and comments

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Comment.hasMany(Post, {
  foreignKey: 'post_id',
})



module.exports = { User, Post, Comment };
