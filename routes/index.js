
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: '业界' });
};

exports.source = function(req, res){
  res.render('source', { title: '技术资源' });
};

exports.answer = function(req, res){
  res.render('answer', { title: '问答' });
};

exports.bbs = function(req, res){
  res.render('bbs', { title: '论坛' });
};

exports.blog = function(req, res){
  res.render('blog', { title: '博客' });
};

exports.product = function(req, res){
  res.render('product', { title: '项目合作' });
};
