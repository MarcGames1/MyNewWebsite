

import React from "react"
import {Row, Container, Col, ListGroup } from "react-bootstrap"
import FB_Page from "../FB_Page/FB_Page"
import SocialMedia from "../Social-Media/SocialMedia"

const Footer =()=>{


    return (<>

    <Container fluid className='bg-dark text-white'>
      <Container>

    <Row>

<Col>
<h5 className="text-uppercase font-weight-bold mb-4">Alexandru Marcu</h5>
<p>Toate drepturile sunt rezervate</p>
<SocialMedia col_md={3} />
</Col>

{/* Prima Coloana */}

<hr className="w-100 clearfix d-md-none"/>

{/* A 2 a Coloana */}

<Col>
<ListGroup>
<p className='h3 text-center'>linkuri utile</p>
<a href='/despre'><ListGroup.Item action variant='secondary'>Despre Mine</ListGroup.Item></a>
<a href='/portofoliu'><ListGroup.Item action variant='secondary'>Portofoliu</ListGroup.Item></a>
<a href='/tutoriale'><ListGroup.Item action variant='secondary'>Tutoriale</ListGroup.Item></a>
<a href='/blog'><ListGroup.Item action variant='secondary'>Blog</ListGroup.Item></a>
  </ListGroup>

</Col>

<hr className="w-100 clearfix d-md-none"/>


<Col>
<ListGroup>
<p className='h3 text-center'>Servicii</p>
<a href='/creare-website'><ListGroup.Item action variant='secondary'>Site de Prezentare</ListGroup.Item></a>
<a href='/optimizare-seo'><ListGroup.Item action variant='secondary'>Optimizare SEO</ListGroup.Item></a>
<a href='/alte-servicii'><ListGroup.Item action variant='secondary'>Servicii Conexe</ListGroup.Item></a>
  </ListGroup>

</Col>


<hr className="w-100 clearfix d-md-none"/>


<Col className='d-flex my-auto justify-content-center'>
<FB_Page />
</Col>


</Row>
      </Container>
    </Container>

    </>)
}


export default Footer
    

