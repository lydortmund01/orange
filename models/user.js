var mongodb = require('./db');

function User(user) {
	this.name = user.name;
	this.password = user.password;
};

/*function User(name, password) {
	this.name = name;
	this.password = password;
};*/

module.exports = User;

User.prototype.save = function save(callback) {
	var user = {
		name: this.name,
		password: this.password,
	};
	
	mongodb.open(function(err, db) {
		if (err) {
		  return callback(err);
		}

		//获取users集合
		db.collection('users', function(err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}

			//为name属性添加索引
			collection.ensureIndex('name', {unique: true});
			console.log("user=="+user.name);
			//save
			collection.insert(user, {safe: true}, function(err, user) {
				mongodb.close();
				callback(err, user);
			});
		});
	});
};

User.get = function get(username, callback) {
	mongodb.open(function(err, db) {
		if (err) {
			return callback(err);
		}

		db.collection('users', function(err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}
			
			//find
			collection.findOne({name: username}, function(err, doc) {
				mongodb.close();
				if (doc) {
					var user = new User(doc);
					callback(err, user);
				} else {
					callback(err, null);
				}
			});
			
			/*var query = {};
			console.log("username==="+username);
			if (username) {
				query.name = username;
			}
			collection.find(query, {limit:9}).toArray(function(err, docs) {
				mongodb.close();

				if (err) {
					callback(err, null);
				}

				var users = [];
				
				docs.forEach(function(doc, index) {
					console.log("doc.name==="+doc.name + ",doc.password==="+doc.password);
					var user = new User(doc.name, doc.password);
					console.log(user);
					users.push(user);
					//console.log(users);
				});
				
				//alert("post.js==="+posts);
				callback(null, users);
			});*/
		});
	});
};
