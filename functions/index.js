export default function (req, res) {
    require('dotenv').config()
  
  
  let nodemailer = require('nodemailer')
  console.log("Entered Contact.js")
  console.log(req.body)
  console.log(req.body.comments)
  
  const transporter = nodemailer.createTransport({
    port: 465,
    
    host: "smtp.gmail.com",
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
    },
    secure: true,
  })
  
  
  console.log(transporter)
  console.log(process.env.NODEMAILER_USER)
  console.log(process.env.NODEMAILER_PASS)
  console.log(process.env.NODEMAILER_TO )
  const mailData = {
    from: process.env.NODEMAILER_USER,
    to: process.env.NODEMAILER_TO,
    subject: `[FORMULAR_CONTACT]${req.body.nume} a completat formularul: `,
    text:`NUME:${req.body.nume}
    Prenume: ${req.body.prenume}
    EMAIL: ${req.body.email}
    TELEFON: ${req.body.phone}
    MESAJ: ${req.body.comments}
    `,
        html: `<div>
        <p>NUME:${req.body.nume}</p>
        <p>Prenume: ${req.body.prenume}</p>
        <p>EMAIL: ${req.body.email}</p>
        <p>TELEFON: ${req.body.phone}</p>
        <p>MESAJ: ${req.body.comments}</p>
        
        </div>
        `
  }
  
  console.log("MAIL DATA IS /n===============================")
  console.log(mailData)
  
    
    transporter.sendMail(mailData, function (err, info) {
        if(err){
  
            console.log("eroare in contact.js")
            console.log(err)
        }
        else
        console.log(info)
        console.log("EMAIL SENT!!!!")
    })
   
    res.send("Success")
  }