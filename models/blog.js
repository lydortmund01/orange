//var mongodb = require('./db');
var db = require('./db');

// 博客的构造方法
function Blog(username, blogtype, blogtheme, blogcontent, blogtime, bloglink, blogup, blogdown, blogreadnum, blogreturnnum, blogreturns) {
	this.username = username;
	this.blogtype = blogtype;
	this.blogtheme = blogtheme;
	this.blogcontent = blogcontent;
	this.blogtime = blogtime;
	this.bloglink = bloglink;
	this.blogup = blogup;
	this.blogdown = blogdown;
	this.blogreadnum = blogreadnum;
	this.blogreturnnum = blogreturnnum;
	this.blogreturns = blogreturns;
};
module.exports = Blog;

// 存储博客
Blog.prototype.save = function save(callback) {
	var blog = {
		username: this.username,
		blogtype: this.blogtype,
		blogtheme: this.blogtheme,
		blogcontent: this.blogcontent,
		blogtime: this.blogtime,
		bloglink: this.bloglink,
		blogup: this.blogup,
		blogdown: this.blogdown,
		blogreadnum: this.blogreadnum,
		blogreturnnum: this.blogreturnnum,
		blogreturns: this.blogreturns
	};
	
	mongodb.open(function(err, db) {
		if (err) {
		  return callback(err);
		}
		
		db.collection('blogs', function(err, collection) {
			if (err) {
				//mongodb.close();
				return callback(err);
			}
			collection.ensureIndex('username');
			//console.log(blog);
			collection.insert(blog, {safe: true}, function(err, blog) {
				//mongodb.close();
				callback(err, blog);
			});
		});
	});
};

//mongodb.open(function(err, db) {
//		if (err) {
//			return callback(err);
//		}
// 遍历库中的博客
Blog.get = function get(querylist, sortlist, username, callback) {
	//console.log("Blog.get---start");
	//console.log(querylist);
	//console.log("Blog.get---end");
	//mongodb.close();
	
		//console.log(db);
		db.collection('blogs', function(err, collection) {
			if (err) {
				//mongodb.close();
				return callback(err);
			}

			//查找user属性为username的文档，如果username为null则匹配全部
			var query = {};

			if (username) {
				query.username = username;
			}
			if(querylist!=null) {
				query.blogtype = querylist;
			}
			//if(sortlist!=null) {
				//sortlist = "blogreadnum";
			//}
			
			//query.blogtime = "";
			//query.blogtype = "互联网";
			//console.log(query);
			//console.log(collection);
			collection.find(query, {limit:30}).sort({sortlist: -1}).toArray(function(err, docs) {
				//mongodb.close();

				if (err) {
					callback(err, null);
				}
				
				var blogs = [];
				
				docs.forEach(function(doc, index) {
					var blog = new Blog(doc.username, doc.blogtype, doc.blogtheme, 
					doc.blogcontent, doc.blogtime, doc.bloglink, doc.blogup, doc.blogdown, doc.blogreadnum, doc.blogreturnnum, doc.blogreturns);
					blogs.push(blog);
				});

				//console.log(blogs);
				//console.log("end");
				//alert("post.js==="+posts);
				callback(null, blogs);
				//callback(blogstype);
			});
		});
	
};
//});
