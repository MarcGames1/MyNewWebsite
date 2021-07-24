import { Col } from "react-bootstrap"

const Footer =()=>{


    return (<>
<Col md={3}>
<h5 className="text-uppercase font-weight-bold mb-4">Footer Content</h5>
<p>Here you can use rows and columns here to organize your footer content.</p>
</Col>

{/* Prima Coloana */}

<hr className="w-100 clearfix d-md-none"/>

{/* A 2 a Coloana */}

<Col md={2}>
<ul className="list-unstyled">
            <li><a href="#!">Link 1</a></li>
            <li><a href="#!">Link 2</a></li>
            <li><a href="#!">Link 3</a></li>
            <li><a href="#!">Link 4</a></li>
          </ul>

</Col>

<hr className="w-100 clearfix d-md-none"/>


{/* A 3 a Coloana */}
<Col md={2}>
<ul className="list-unstyled">
            <li><a href="#!">Link 1</a></li>
            <li><a href="#!">Link 2</a></li>
            <li><a href="#!">Link 3</a></li>
            <li><a href="#!">Link 4</a></li>
          </ul>

</Col>

    </>)
}


export default Footer
    

