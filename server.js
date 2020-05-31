const express = require('express'),
app = express();
path = require('path');
router = express.Router();
nodemailer = require("nodemailer");
let http = require('http'),
io = require('socket.io'),
fs = require('fs')

router.get('/',function(req,res){
    if (req.headers["x-forwarded-proto"] == "http")
            res.redirect(`https://${req.headers.host}${req.url}`);
    else
        res.sendFile(path.join(__dirname+'/index.html'));
        next()
});
router.get('/send',function(req,res){
    let smtpTransport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        auth: {
            user: "vierramessager@gmail.com",
            pass: 'vierrasender'
        }
    });
    
    let mailOptions={
        to : "guivpw68@gmail.com",
        subject : req.query.subject,
        text : req.query.text
    }

    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            res.end("error");
        }else{
            res.end("sent");
        }
    });
});

app.use('/', router);
app.use(express.static(path.join(__dirname, 'public/src')));
const server = http.createServer(app);
server.listen(3000)
io = io.listen(server);

