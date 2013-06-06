//var mongodb = require('./db');
var db = require('./db');

// 博客的构造方法
function BlogType(typename, typelink, tpyeid) {
	this.typename = typename;
	this.typelink = typelink;
	this.typeid = tpyeid;
	
	//console.log(this.blogtheme);
};
module.exports = BlogType;

//mongodb.open(function(err, db) {
//		if (err) {
//			return callback(err);
//		}
// 遍历库中的博客
BlogType.get = function get(username, callback) {
	
	
		db.collection('blogs_type', function(err, collection) {
			if (err) {
				//mongodb.close();
				return callback(err);
			}

			//查找user属性为username的文档，如果username为null则匹配全部
			var query = {};

			if (username) {
				query.username = username;
			}

			collection.find(query, {limit:20}).sort({time: -1}).toArray(function(err, docs) {
				//mongodb.close();

				if (err) {
					callback(err, null);
				}

				var blogstype = [];
				//console.log(docs);
				docs.forEach(function(doc, index) {
					var blogtype = new BlogType(doc.typename, doc.typelink, doc.id);
					blogstype.push(blogtype);
				});
				//console.log(blogstype);
				//console.log("end");
				//alert("post.js==="+posts);
				callback(null, blogstype);
				//callback(blogstype);
			});
		});
	
};
//});

