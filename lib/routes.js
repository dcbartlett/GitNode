// Setup Routes
// TODO:  Create a router to dynamically create routes based on API.
GitNode.webServer.get('/api/user/:id', user);
GitNode.webServer.get('/api/repo', GitNode.controllers.repo.readAll);
GitNode.webServer.get('/api/repo/:id', GitNode.controllers.repo.read);
GitNode.webServer.post('/api/repo', GitNode.controllers.repo.create);
GitNode.webServer.put('/api/repo', GitNode.controllers.repo.update);
GitNode.webServer.del('/api/repo/:id', GitNode.controllers.repo.delete);


function user(req, res, next) {
	res.send({id:12345,name:'Bob',age:21})
}
