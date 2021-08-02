import axios from "axios";
import React, { useState } from "react";
import { Form, Col, Row, Button, Alert } from "react-bootstrap";

function FormularContact() {
    const [validated, setValidated] = useState(false);

    const [nume,setNume] =useState('')
    const [prenume, setPrenume] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [comments, setComments] = useState('')
    
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
      let data = {
        nume,
        prenume,
        email,
        phone,
        comments,
        
      }
      console.log(data)
      if(data.nume && data.prenume && data.email && data.phone && data.comments){

        const headers = {
          'Accept': 'application/json, text/plain, */*',
          'content-type': 'application/json'
        }
        axios.post('/api/contact',data, headers)
        .then((response) => {
          alert("Formularul s-a trimis cu succes, Va voi contacta curand");
          console.log(response)
        }, (error) => {
          alert("Formularul nu s-a trimis!!!!");
          console.log(error);
        });
      } else{
        console.log('Date incomplete! aici sunt datele')
        console.log(data)
      }  
          
    };
  
    return (<Alert variant={'primary'}>
      <h6 className='h4 text-center'>Contact </h6>
      <Form name="contact" method='POST' data-netlify='true' noValidate validated={validated} onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Nume</Form.Label>
            <Form.Control
              onChange= {(e)=>{setNume(e.target.value)}}
              required
              type="text"
              placeholder="Nume"
              />
             
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Prenume</Form.Label>
            <Form.Control
              required
              onChange= {(e)=>{setPrenume(e.target.value)}}
              type="text"
              placeholder="Prenume"
              
              />
           <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>
         
        </Row>
        <Row className="mb-3">

          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" required onChange= {(e)=>{setEmail(e.target.value)}} />
            <Form.Control.Feedback type="invalid">
              Introduceti o adresa valida de email
            </Form.Control.Feedback>
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>



          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Numar de Telefon</Form.Label>
            <Form.Control type="tel" placeholder="Telefon" required onChange= {(e)=>{setPhone(e.target.value)}}/>
            <Form.Control.Feedback type="invalid">
              Introduceti numarul de telefon!
            </Form.Control.Feedback>
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>
          
        </Row>
        <Form.Group as={Col} md='12' className="mb-3">
        <Form.Label className="mb-3">Descrie-mi pe scurt ideea ta legata de site iar eu te voi contacta in cel mai scurt timp si iti voi spune cum te pot ajuta </Form.Label>
    <Form.Control as="textarea" onChange={(e)=>{setComments(e.target.value)}} placeholder="Am nevoie de un site de prezentare pentru afacerea mea ..." 
    style={{ height: '300px' }}
  
/>
          <Form.Check
            required
            label="Sunt de acord cu politica de prelucrare a datelor"
            feedback="Trebuie sa acceptati Termenii si Conditiile"
            />
        </Form.Group>
        <Button onClick={(e)=>{handleSubmit(e)}} type="submit">Trimiteti</Button>
      </Form>
            </Alert>
    );
  }
  
  export default FormularContact