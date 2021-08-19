
    
    function sendToWhatsapp(nume, prenume, email, phone, comments ) {
    
    

        var url = "https://wa.me/+40751606444?text=" 
        + "Nume: " + nume + "%0a"
        + "Prenume: " + prenume + "%0a"
        + "Email: " + email  + "%0a"
        + "Telefon: " + phone+ "%0a"
        +"Comentariu "+ comments; 
    
        window.open(url, '_blank').focus()
    }

export default sendToWhatsapp