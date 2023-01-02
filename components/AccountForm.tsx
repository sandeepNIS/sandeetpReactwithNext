import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormLabel, Button } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.css';
import Styles from './AccountForm.module.css'
import ButtonLoading from "./ButtonLoading";

const AccountForm = (props) => {
const validationSchema = Yup.object().shape({
	username: Yup.string().required("Required"),
	email: Yup.string().required("Required"),
	password: Yup.string().required("Required")
});
console.log(props);
return (
	
	<div className="form-group">
	<br/>
	<Formik {...props} validationSchema={validationSchema}>
        <center>
           
		<Form className={Styles.form}>
		<FormGroup>
        <FormLabel >Name</FormLabel>
			<Field   name="username" type="text"
				className="form-control "   />
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
		<Button variant="danger" size="sm"
		type="submit" >
			{props.children}
		</Button>
		</Form>
        </center>
	</Formik>
	<style jsx>{`
        .form-control{
			width:170px;
        }
      `}</style>
	</div>
	
);
};

export default AccountForm;