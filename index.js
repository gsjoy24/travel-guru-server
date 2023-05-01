const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const destinations = require('./data/destinations.json');
const rooms = require('./data/rooms.json');

app.use(cors());

app.get('/', (req, res) => {
	res.send('server for travel guru is running');
});

app.get('/destinations', (req, res) => {
	res.send(destinations);
});

app.get('/rooms/:id', (req, res) => {
	const id = req.params.id;

	const foundedRooms = rooms.filter((room) => room.id === id);
	res.send(foundedRooms);
});

app.listen(port, () => {
	console.log(`running on port ${port}`);
});
