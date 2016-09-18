var nodemailer = require("nodemailer");
var user = '1595552404@qq.com',
  pass = 'sjl010102';
var smtpTransport = nodemailer.createTransport("SMTP", {
  service: "QQ",
  auth: {
    user: user,
    pass: pass
  }
});


exports.sendEmail = function() {
  console.log('hello');
  smtpTransport.sendMail({
    from: 'Kris<' + user + '>',
    to: '<545529372@qq.com>',
    subject: 'Node.JS通过SMTP协议从QQ邮箱发送邮件',
    html: '这是一封测试邮件 <br> '
  }, function(err, res) {
    console.log(err, res);
  });
}