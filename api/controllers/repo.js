var GitServer = require('git-server');
var newUser = {
    username:'demo',
    password:'demo'
}
var newRepo = {
    name:'myrepo',
    anonRead:false,
    users: [
        { user:newUser, permissions:['R','W'] }
    ]
}

server = new GitServer([ newRepo ]);

module.exports = {
    create: function (req, res){
        res.send(201, "Repo cats Created");
    },
    read: function (req, res){
        res.send(200, "Repo is cats");
    },
    readAll: function (req, res){
        res.send(200, "Repos are cats");
    },
    update: function (req, res){
        res.send(202, "Repo cats updated");
    },
    delete: function (req, res){
        res.send(204);
    }
}
// server.createRepo({
//     name:'myrepo2',
//     anonRead:false,
//     users: [
//         { user:newUser, permissions:['R','W'] }
//     ]
// }, function(err) {
// 	if (err) console.log(err);
// 	console.log('Created Repo');
// });