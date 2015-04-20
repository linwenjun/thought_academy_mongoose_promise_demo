/**
 * mongoose promise demo 
 *
 */

var mongoose = require('mongoose');
    Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/myapp');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log("OK!!");
});


var userSchema = Schema({
    name: String,
    role: Number,
})

var User = mongoose.model('User', userSchema);

var newUser = [];

for(var i=0; i<10; i++) {
    newUser.push({
        name: '编号' + i,
        role: parseInt(Math.random()*5)
    });
}

console.log("新用户");
console.log(newUser);

User.create(newUser).then(function() {
    return User.find().exec()  
}).then(function(users) {
    console.log("删除前有" + users.length + "个用户");
    console.log("角色分别为:");
    console.log(users.map(function(item) {
        return item.role;
    }))
    return User.findOne({}).exec();
}).then(function(user) {
    console.log("删除所有角色为" + user.role + "的user")
    return User.remove({role: user.role}).exec()
}).then(function(user) {
    console.log("<========================= 我是分隔符 ==========================>")
    return User.find().exec();  
}).then(function(users) {
    console.log("删除后有" + users.length + "个用户");
    console.log("角色分别为:");
    console.log(users.map(function(item) {
        return item.role;
    }))
}).onReject(function(err) {
    console.log(err);
}).onResolve(function() {
    process.exit();
})



