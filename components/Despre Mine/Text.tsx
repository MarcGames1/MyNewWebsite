 import React, {useState} from 'react'
import { Button, Container, Modal } from 'react-bootstrap'
import FormularContact from '../FormularContact/FormularContact'
import styles from './Text.module.css'
 
 function AboutText_Form  () {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    return(<>
     <Modal show={show} onHide={handleClose}>

    <Modal.Dialog>
  

  <Modal.Body>
    <FormularContact />
  </Modal.Body>

  <Modal.Footer>
    <Button onClick={handleClose} variant="danger">Inchideti</Button>
    
  </Modal.Footer>
</Modal.Dialog>
     </Modal>

    <Container className={styles.blackTransparent}>
        <Container className={'m-1'} >

        <h1 className='text-center'>Despre Mine</h1>
        <hr />
        <p>
        Sunt Alexandru Marcu, iar parcursul meu profesional este unul cel puțin interesant – cel puțin așa îl definesc  eu. 
        </p>
        <p>De la jobul de contabil la un club high-class din Galați, orașul natal, ambiția și dorința de a evolua m-au adus la un proiect personal: o afacere cu închirierea de biciclete și mașini pentru serviciile de livrari și transport din Brașov. </p>
        <p>Însă lucrurile nu se opresc aici. Cred în căutarea, dar mai ales în descoperirea vocației, iar asta m-a făcut să învăț programare pe cont propriu. Și așa mi-am descoperit vocația. A urmat primul proiect și primul client mulțumit. </p>
        <p>Aștept să ne cunoaștem, pentru a materializa ideile tale, la cel mai înalt standard de calitate.</p>
       <div>
       <Button onClick={handleShow} className='m-3 d-block mx-auto' size={'lg'} variant={'primary'}>Completeaza Formularul Acum!</Button>
       </div>
        </Container>
    </Container>
    </>)

}
export default AboutText_Form