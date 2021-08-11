import {Container, ListGroup, ListGroupItem } from "react-bootstrap"


const AlteServicii=()=>{

    const servicii = ['Conectare Servicii Google (Google Analitycs, Google Search Console, Tag Manager etc)', 'Adaugare Obiective prin Google Tag Manager si urmarirea conversiilor prin Google Analitycs ', 'Gestionare si Optimizare Campanii Google Ads' ]

    return(
        <Container>
        
 
      <ListGroup>
          {servicii.map(serviciu=>{return<ListGroupItem key={serviciu}>{'✅ '}{serviciu}</ListGroupItem>})}
      </ListGroup>
        </Container>
    )
}

export default AlteServicii