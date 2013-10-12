//consts
var DB_NAME = 'node-cal-dev';
var COLLECTION_NAME = 'events';

var mongo = require('mongodb');
 
var Server = mongo.Server,
	Db = mongo.Db,
	BSON = mongo.BSONPure;
 
var server = new Server('localhost', 27017, {auto_reconnect: true});

db = new Db(DB_NAME, server);
 
db.open(function(err, db) {
	if(!err) {
		console.log("Connected to " + DB_NAME + " database");
		db.collection(COLLECTION_NAME, {strict:true}, function(err, collection) {
			if (err) {
				console.log("The "+ COLLECTION_NAME + " collection doesn't exist.");
			}
		});
	}
});
 
exports.findById = function(req, res) {
	var id = req.params.id;
	console.log('Retrieving event: ' + id);
	db.collection(COLLECTION_NAME, function(err, collection) {
		collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
			res.send(item);
		});
	});
};

exports.findByAll = function(req, res) {
	console.log('Retrieving all events);
	db.collection(COLLECTION_NAME, function(err, collection) {
		collection.find().toArray(function(err, items) {
			res.send(items);
		});
	});
};

exports.addEvent = function(req, res)

exports.findAll = function(req, res) {
	res.send([{name:'event1'}, {name:'event2'}]);
};

exports.findById = function(req, res) {
	res.send({id:req.params.id, name: "The Name", description: "description"});
}
