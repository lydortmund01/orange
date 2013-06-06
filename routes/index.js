
/*
 * GET home page.
 */

var crypto = require('crypto');
var User = require('../models/user.js');
var Blog = require('../models/blog.js');
var BlogType = require('../models/blogtype.js');
var sort = "移动开发";
var EventProxy = require('../models/eventproxy.js');
//var getBlogType = require('../models/getBlogData.js');
//var $ = require('jquery');

// 展示首页-业界动态
exports.index = function(req, res){

	Blog.get(null, null, null, function(err, blogs) {
			if (err) {
				blogs = [];
			}
			res.render('index', {
				title: '首页',
				blogs : blogs,
				user : req.session.user,
				success : req.flash('success').toString(),
				error : req.flash('error').toString()
			});
		});
};

// 判断用户是否存在
exports.user = function(req, res) {
	User.get(req.params.user, function(err, user) {
		if (!user) {
			req.flash('error', '用户不存在');
			return res.redirect('/');
		}
	});
};

// 用户注册页面
exports.reg = function(req, res) {
	res.render('reg', {
		title: '用户注册',
		user : req.session.user,
		success : req.flash('success').toString(),
		error : req.flash('error').toString()
    });
};

// 注册时检查用户名是否已经注册过，如果没有，则注册成功，返回到当前页
exports.doReg = function(req, res) {
	//检查密码
    if (req.body['password-repeat'] != req.body['password']) {
		req.flash('error', '两次输入的密码不一致');
		return res.redirect('/reg');
    }
  
    //生成md5的密码
    var md5 = crypto.createHash('md5');
    var password = md5.update(req.body.password).digest('base64');
    
    var newUser = new User({
		name: req.body.username,
		password: password,
    });
    
    //检查用户名是否已经存在
	User.get(newUser.name, function(err, user) {
		if (user)
			err = 'Username already exists.';
		if (err) {
			req.flash('error', err);
			return res.redirect('/reg');
		}
		//如果不存在則新增用戶
		newUser.save(function(err) {
			if (err) {
				req.flash('error', err);
				return res.redirect('/reg');
			}
			req.session.user = newUser;
			req.flash('success', '注册成功');
			res.redirect('/');
		});
	});
};

// 用户登录页面
exports.login = function(req, res) {
	res.render('login', {
		title: '用户登录',
		user : req.session.user,
		success : req.flash('success').toString(),
		error : req.flash('error').toString()
    });
};

// 判断用户登录是否正确，如果正确跳转到当前页，反之返回到登录页面
exports.doLogin = function(req, res) {
	//生成口令的散列值
    var md5 = crypto.createHash('md5');
    var password = md5.update(req.body.password).digest('base64');
    
	User.get(req.body.username, function(err, user) {
		if (!user) {
			req.flash('error', '用户不存在');
			return res.redirect('/login');
		}
		if (user.password != password) {
			req.flash('error', '密码错误');
			return res.redirect('/login');
		}
		req.session.user = user;
		req.flash('success', '登录成功');
		res.redirect('/');
	});
};

// 注销登录，返回到当前页
exports.logout = function(req, res) {
	req.session.user = null;
    req.flash('success', '登出成功');
    res.redirect('/');
};

// 技术资源页面
exports.source  = function(req, res) {
	res.render('source', {
		title: '技术资源',
		user : req.session.user,
		success : req.flash('success').toString(),
		error : req.flash('error').toString()
	});
}

// 问答页面
exports.answer  = function(req, res) {
	res.render('answer', {
		title: '问答',
		user : req.session.user,
		success : req.flash('success').toString(),
		error : req.flash('error').toString()
	});
}

// 论坛页面
exports.bbs  = function(req, res) {
	res.render('bbs', {
		title: '论坛',
		user : req.session.user,
		success : req.flash('success').toString(),
		error : req.flash('error').toString()
	});
}

// 项目合作页面
exports.project  = function(req, res) {
	res.render('project', {
		title: '项目合作',
		user : req.session.user,
		success : req.flash('success').toString(),
		error : req.flash('error').toString()
	});
}

// 博客页面
exports.showblog  = function(req, res) {
		/*var proxy = new EventProxy();
		proxy.all("blogstype", "blogs", function (blogstype, blogs) {
		    // TODO
		    res.render('blog', {
					title: '博客',
					blogstype : blogstype,
					blogs : blogs,
					user : req.session.user,
					success : req.flash('success').toString(),
					error : req.flash('error').toString()
				});
		});
		BlogType.get("blogstype", function (blogstype) {
		    proxy.emit("blogstype", blogstype);
		});
		Blog.get("blogs", function (blogs) {
		    proxy.emit("blogs", blogs);
		}); */

		BlogType.get(null, function(err, blogstype) {
			if (err) {
				blogstype = [];
			}
			Blog.get(sort, "blogreadnum", null, function(err, blogs) {
				if (err) {
					blogs = [];
				}
				console.log("exports.showblog--blog----start");
				console.log(blogstype);
				console.log(blogs);
				console.log("exports.showblog--blog----end");
				res.render('blog', {
					title: '博客',
					blogstype : blogstype,
					blogs : blogs,
					user : req.session.user,
					success : req.flash('success').toString(),
					error : req.flash('error').toString()
				});
			});
		});
	
}

// 博客页面
exports.postShowblog  = function(req, res) {
		console.log(req.body.blogtype);
		sort = req.body.blogtype;
		Blog.get(req.body.blogtype, null, null, function(err, blogs) {
			if (err) {
				blogs = [];
			}
			res.redirect('/');
		});
}

// 个人主页博客详情页面
exports.details  = function(req, res) {
	Blog.get(null, null, null, function(err, blogs) {
			if (err) {
				blogs = [];
			}
			res.render('details', {
				title: '博客详情',
				blogs : blogs,
				user : req.session.user,
				success : req.flash('success').toString(),
				error : req.flash('error').toString()
			});
		});
}

// 个人主页博客发表页面
exports.ownblog = function(req, res) {
	console.log("exports.ownblog");
	var currentUser = req.session.user;
	var blog = new Blog(currentUser.name, req.body.own_blog_type, req.body.own_blog_theme, req.body.own_blog_content, req.body.own_blog_time,
						req.body.own_blog_link, req.body.own_blog_up, req.body.own_blog_down, req.body.own_blog_readnum, req.body.own_blog_returnnum, req.body.own_blog_returns);
	console.log("exports.blog--start");
	console.log(blog);
	console.log("exports.blog--end");
	blog.save(function(err) {
		if (err) {
			req.flash('error', err);
			return res.redirect('/');
		}
		req.flash('success', '发表成功');
		res.redirect('/details');
	});

};

// 用户注册页面
exports.manager = function(req, res) {
	res.render('manager', {
		title: '管理',
		user : req.session.user,
		success : req.flash('success').toString(),
		error : req.flash('error').toString()
    });
};
