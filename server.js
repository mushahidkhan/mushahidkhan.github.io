const { createServer } = require('http');
const next = require('next');
//tells server is not in production
//look at the global environment node and see its not runnign in production
const app = next({ dev: process.env.NODE_ENV != 'production' });
const routes = require('./routes');
const handler = routes.getRequestHandler(app);

app.prepare().then(()=> {
	createServer(handler).listen(3000, (err) => {
		if(err) throw err;
		console.log('Ready on localhost:3000');
	});
});
