const User = require('./User');
const Project = require('./Project');

// Follow this template for posts and comments

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});



module.exports = { User, Project };
