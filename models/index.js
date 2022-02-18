const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post')

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsToMany(User, {
    foreignKey: 'user_id'
});



module.exports = { User, Comment, Post };