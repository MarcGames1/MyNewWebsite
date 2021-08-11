import { Row, Col, Button, Container, ListGroup } from "react-bootstrap"
import Portofoliu from "../../Classes/entry/portofoliu"

const PortofoliuElement=(props:Portofoliu) =>{

    return(
        <Container className='my-2'>
        <Row>
            <Col lg={6} sm={12}>
              <div>
                <h3 className="text-center">{props.name}</h3>
                <div>
                  <p className="mb-4">
                   {props.description}
                  </p>
                </div>
                <ListGroup variant={'flush'}>
                     {props.serviciiList.map((serviciu)=><ListGroup.Item key={serviciu}>{'✅ '}{serviciu}</ListGroup.Item>)}
                </ListGroup>
              
              
              </div>
            </Col>
            <Col className='mx-auto my-auto' lg={6} sm={12}>
              <div>
                <a rel="nofollow" href={props.link} target="_blank">
                  <div className="thumbnail rounded">
                    <img
                      alt={'proiect '+props.name}
                      className="img-fluid"
                      src={props.imglocation}
                    />
                  </div>
                </a>
              </div>
              <Button className='d-block w-100'  variant={'secondary'}>
                <a className='text-white'
                  rel="nofollow"
                  target="_blank"
                  
                  href={props.link}
                >
                  Catre Site
                </a>
                </Button>
            </Col>
          </Row>
        </Container>
    )
}

export default PortofoliuElement