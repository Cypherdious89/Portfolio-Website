/*jshint esversion: 6 */

const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

const PORT = process.env.PORT || 5500;

//MIDDLEWARE
app.use(express.static('public'));
app.use(express.json());

app.get("/", (req, res) =>{
    // res.render('public/index.html');
    res.sendFile(__dirname + '/public/index.html');
});

app.post("/", (req, res) =>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'singhpriyansh3.14@gmail.com',
            pass: 'priyansh09ps'
        }
    });

    const mailOptions = {
        from: req.body.email,
        to: 'singhpriyansh3.14@gmail.com',
        subject: `Mail from ${req.body.email} : ${req.body.subject}`,
        text: `Message from ${req.body.name} \n ${req.body.message}`
    };

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send(error);
        }else{
            console.log('Email Sent: '+info.response);
            res.send('success');
        }
    });
});

//DEFAULT ROUTE
app.get("*", function(req,res){
    res.send("PAGE NOT FOUND !!!");
});

app.listen(PORT, ()=>{
    console.log(`Server Running on port ${PORT}`);
});