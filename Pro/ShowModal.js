import React from 'react';


import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { propTypes } from 'react-bootstrap/esm/Image';
// import { BsCart } from "react-icons/bs";
// import { addToCart } from '../Redux/Actions/CartAction';

 function ShowModal(props) {
    const [show, setShow] = useState(false);
    const handeClose = () => setShow(false);
    const handeShow = () => setShow(true);
    const dispach = useDispatch();
    return (
        <>
            <Button variant="light" onClick={handeShow}>Go somewhere</Button>

            <Modal show={show} onHide={handeClose}>
                <Modal.Header   >
                    <Modal.Title>{props.product.name}</Modal.Title>
                </Modal.Header >
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="logInForm.ControlText1" >
                        <img className="card-img-top" src={props.product.image} alt="Card image cap" ></img>
                            <h5>{props.product.capitalCity}</h5><br></br>
                            <h5>price: {props.product.price}</h5>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handeClose}>close</Button>
                    <Button className="btn btn-primary" /*variant="success"*/ onClick={(e) => {
                    // e.preventDefault();
                    // // dispach(additionQty(props.product.qty - 1));
                    // props.product.qty = 1;
                    // dispach(addToCart((props.product)))
                    // setShow(false);

                    }}>Add to cart </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default ShowModal;
{/* <BsCart></BsCart> */}//קומפוננטה של העגלה


// <Form.Group className="mb-3" controlId="logInForm.ControlText1" >
// <img id="detailesImg" style={{ height: "200px", width: "300px" }} src={props.product.image}></img>
// <h5>{props.product.description}</h5><br></br>
// <h5>price: {props.product.price}</h5>
// </Form.Group>


// function ShowModal() {


//     return (
//         <div>
//           <button>ytgygyg</button>
//         <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
//   <div class="modal-dialog modal-dialog-centered">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Modal 1</h1>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         Show a second modal and hide this one with the button below.
//       </div>
//       <div class="modal-footer">
//         <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
//       </div>
//     </div>
//   </div>
// </div>
// <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
//   <div class="modal-dialog modal-dialog-centered">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         Hide this modal and show the first with the button below.
//       </div>
//       <div class="modal-footer">
//         <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
//       </div>
//     </div>
//   </div>
// </div>
// <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Open first modal</button>
// </div>

//     );
// };
// export default ShowModal;

// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

//  function ShowModal(props) {

//   const [modalShow, setModalShow] = React.useState(false);
//   return (
//     <>
//     <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <ShowModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}/>

//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Centered Modal</h4>
//         <p>
//           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//           consectetur ac, vestibulum at eros.
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//     </>
//   );
// }

//  export function App() {
  

//   return (
//     <>
      
      
//     </>
//   );
// }

// export default ShowModal;
//  render(<App />);

