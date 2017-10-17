module.exports = function addRoutes(app) {
	app.use('/api/route', require('./route'));
};
