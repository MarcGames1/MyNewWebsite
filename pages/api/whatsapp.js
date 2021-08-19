function sendToWhatsapp(nume, prenume, email, phone, comments ) {
    
    

    var url = "https://wa.me/+40751606444?text=" 
    + "Nume: " + nume + "%0a"
    + "Prenume: " + prenume + "%0a"
    + "Email: " + email  + "%0a"
    + "Telefon: " + phone+ "%0a"
    +"Comentariu "+ comments; 

    window.open(url, '_blank').focus()
}


export default function (req, res) {

console.log(req.body)


try {
    sendToWhatsapp(req.body.nume, req.body.prenume, req.body.email, req.body.phone, req.body.comments)
} catch (error) {
    console.log(error)
}
res.status(200).json({ name: 'Success!' })
}