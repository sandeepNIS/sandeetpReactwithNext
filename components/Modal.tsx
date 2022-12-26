import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {  Form,Formik, Field, } from "formik";
import { FormGroup, FormLabel } from "react-bootstrap";


export default function Example(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [id, setId] = useState(props.id);
  let userData = {
    name: name,
    email:email,
    id:id
  };
  const nameChangeHandler = (e) => {
    setName(e.target.value);
    userData.name = e.target.value;
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    userData.email = e.target.value;
  };

  const idChangeHandler = (e) => {
    setId(e.target.value);
    userData.id = e.target.value;
  };

  const formOnChageHandler = (e) => {
    e.preventDefault();
    props.getData(userData);
    handleClose();
  };
  const fromOnSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Button  className="m-1 ms-0 mt-0 "  variant="primary" onClick={handleShow} size="sm">
       U_info 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >Hi ! {name} your info...</Modal.Title>
        </Modal.Header>
        <Modal.Body>  
        <div className="form-wrapper">
        <Formik {...props}>
        <Form className='myform'   onSubmit={fromOnSubmitHandler} >
		<FormGroup>
        <FormLabel>id</FormLabel>
			<Field name="id" type="number"
				className="form-control" value={id}  onChange={idChangeHandler}/>
		</FormGroup>
		<FormGroup>
        <FormLabel>Name</FormLabel>
			<Field name="username" type="text"
				className="form-control" value={name}    onChange={nameChangeHandler}/>
		</FormGroup>
		<FormGroup>
        <FormLabel>email</FormLabel>
			<Field name="email" type="email"
				className="form-control" value={email}  onChange={emailChangeHandler}/>
		</FormGroup>
    <br></br>
    <Button  type="submit" variant="secondary" onClick={formOnChageHandler} >
            submit
          </Button>
		</Form>
        </Formik>
        </div>
        </Modal.Body>
        <Modal.Footer>  
        </Modal.Footer>
      </Modal>
      </>
  );
} 

