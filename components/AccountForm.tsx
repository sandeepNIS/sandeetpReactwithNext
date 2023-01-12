
import React,{useEffect, useState} from 'react';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormLabel, Button } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.css';
import Styles from './AccountForm.module.css'
//   import Loader from "react-loader-spinner";
import Loaderr from './SpinnerLoading';
import ClipLoader from "react-spinners/ClipLoader";

const AccountForm = (props) => {
const validationSchema = Yup.object().shape({
	username: Yup.string().required("Required"),
	email: Yup.string().required("Required"),
	password: Yup.string().required("Required")
});
console.log(props);
// const [loading, setLoading] = useState(false);
// useEffect(() => {
//     setLoading(true)
// 	setTimeout(()=>{
// 		setLoading(false)
// 	},2000)
//   }, []);
// const [isModal, setState] = useState(false);

// const toggleUserModal = () => {
//     setState(true);
//   };

//   const handleCloseModal = () => {
//     setState(false);
//   };
//   const closeLoaderIn5Seconds = () => {
// 	setTimeout(() => {
// 	  setState(
// 		false
// 	  );
// 	}, 1000);
//   };
//   const handleSubmit = e => {
// 	e.preventDefault();
// 	setState(
// 	  true
// 	);
// 	closeLoaderIn5Seconds();
//   };

//   const nameChangeHandler = (e) => {
//     setName(e.target.value);
//     userData.name = e.target.value;
//   };
return (
	
	<div className="form-group">
	
		
		
		
		
	<br/>
	
	<Formik {...props} validationSchema={validationSchema}>
        <center>
           
		<Form className={Styles.form} > 
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
		type="submit"  >
			{props.children}
			{/* {loading && (<ClipLoader color={'black'} loading={loading} size={100}/>)} */}
			{/* {isModal && (
		<Loaderr/>)}	 */}
		  
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