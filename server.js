const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const nodemailer = require("nodemailer");
let http = require('http');

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});
router.get('/send',function(req,res){
    let smtpTransport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        auth: {
            user: "vierramessager@gmail.com",
            pass: "s1e2n3d4e5r6"
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
server.listen(3000);

