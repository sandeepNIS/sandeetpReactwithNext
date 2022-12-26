import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormLabel, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
// import Navbar from "../pages";
import Link from 'next/link';

const AccountForm = (props) => {
const validationSchema = Yup.object().shape({
	username: Yup.string().required("Required"),
	email: Yup.string().required("Required"),
	password: Yup.string().required("Required")
});
console.log(props);
return (
	
	<div className="form-wrapper">
		{/* <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        
        <Link href="/posts/home" className="navbar-brand">MyApp</Link>
        <ul className='navbar-nav'>
            <li className="nav-item active">
            <Link href="/posts/register" className="nav-link">Register</Link> 
                </li>
                <li className='nav-item '>
                <Link href="/posts/list" className="nav-link">List</Link> 
            </li>
        </ul>
    </nav> */}
	<nav className="nav">
        
        <Link href="/posts/home" className="site-title"  >MyApp</Link>
        <ul >
            <li className="active">
            <Link href="/posts/register" className="nav-link">Register</Link> 
            </li>               
                <li className="active">
                <Link href="/posts/list" className="nav-link">List</Link>
            </li>
        </ul>
    </nav>
    
	<br/>
	<Formik {...props} validationSchema={validationSchema}>
        <center>
           
		<Form>
		<FormGroup>
        <FormLabel>Name</FormLabel>
			<Field name="username" type="text"
				className="form-control "autoFocus  />
			<ErrorMessage
			name="username"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
        <br></br>
		<FormGroup>
        <FormLabel>Email</FormLabel>
			<Field name="email" type="text"
				className="form-control" />
			<ErrorMessage
			name="email"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
        <br></br>
		<FormGroup>
        <FormLabel>Password</FormLabel>
			<Field name="password" type="password"
				className="form-control" />
			<ErrorMessage
			name="password"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
        <br></br>
		{/* //block="block"  */}
		<Button variant="danger" size="sm"
		type="submit">
			{props.children}
		</Button>
		</Form>
        </center>
	</Formik>
	</div>
	
);
};

export default AccountForm;