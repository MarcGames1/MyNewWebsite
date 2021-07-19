import React, { useState } from "react";
import { Form, Col, InputGroup, Row, Button, Alert } from "react-bootstrap";
import { Link } from "react-bootstrap/lib/Navbar";
import Checkmark from "../SVG.components/checkmark";

function FormularContact() {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (<Alert variant={'primary'}>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Nume</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nume"
              />
             
            <Form.Control.Feedback><Checkmark color={'currentColor'} height={24} /></Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Prenume"
              
              />
           <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>
         
        </Row>
        <Row className="mb-3">

          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" required />
            <Form.Control.Feedback type="invalid">
              Introduceti o adresa valida de email
            </Form.Control.Feedback>
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>



          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Numar de Telefon</Form.Label>
            <Form.Control type="tel" placeholder="Telefon" required />
            <Form.Control.Feedback type="invalid">
              Introduceti numarul de telefon!
            </Form.Control.Feedback>
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>
          
        </Row>
        <Form.Group as={Col} md='12' className="mb-3">
        <Form.Label className="mb-3">Descrie-mi pe scurt ideia ta legata de site iar eu te voi contacta in cel mai scurt timp si iti voi spune cum te pot ajuta </Form.Label>
    <Form.Control as="textarea" placeholder="Am nevoie de un site de prezentare pentru afacerea mea ..." 
    style={{ height: '300px' }}
  
/>
          <Form.Check
            required
            label="Sunt de acord cu politica de prelucrare a datelor"
            feedback="Trebuie sa acceptati Termenii si Conditiile"
            />
        </Form.Group>
        <Button type="submit">Trimiteti</Button>
      </Form>
            </Alert>
    );
  }
  
  export default FormularContact