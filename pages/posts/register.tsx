
import React, { useEffect, useState} from "react";
import axios from 'axios';
import AccountForm from "../../components/AccountForm";
import 	ClipLoader
from "react-spinners/ClipLoader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Alert } from "react-bootstrap";


// import Backdrop from '@material-ui/core/Backdrop';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// import { Loader } from "../../components/SpinnerLoading";

// import SpinnerLoading from "../../components/SpinnerLoading";
// import Loader from "../../components/SpinnerLoading";
const Register = () => {
	// const notify = () => toast("Account succesfully created");
		const style = { position: "fixed",top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

// 	const [isModal, setState] = useState(false);
// console.log(isModal);

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
//   const handleSubmit = () => {
// 	// e.preventDefault();
// 	setState(
// 	  true
// 	);
// 	{isModal && (
// 		<Loaderr />)}
// 	closeLoaderIn5Seconds();
//   };


// const useStyles = makeStyles((theme) => ({
//   backdrop: {
//     zIndex: theme.zIndex.drawer + 1,
//     color: '#fff',
//   },
// }));
const [loading, setLoading] = useState(false);
const [status, setStatus] = useState(undefined);
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
// useEffect(() => {
//     setLoading(true)
// 	setTimeout(()=>{
// 		setLoading(false)
// 	},2000)
//   }, []);
const [message, setMessage] = useState("");
const [formValues, setFormValues] =
	useState({ username:'', email: '', password: '' })


const onSubmit = accountObject => {
	setLoading(true)

	axios.post(
`http://localhost:3080/account/addaccountT`,
	accountObject)
	.then(res => {	
		// setMessage("Created successfully");
		setTimeout(()=>{
				setLoading(false)
			},1000)
		if (res.status === 200){
			setMessage("Created successfully!");
			// setTimeout(()=>{
			// 	setLoading(false)
			// },1000)
			
			
			
		
			
			const { username, email, password } = res.data;
			
			// alert('Account successfully created');
			
			// window.onload = function(){
			// 	Alert('Account successfully created');
			// }
		

        setFormValues({ username, email, password });
		
		// window.location.reload();
		// setStatus({ type: 'success' });
		
			

		}
		else
		Promise.reject()

		
	})
	.catch(err => {setMessage("Some error occured!")
	setTimeout(()=>{
		setLoading(false)
	},1000)
}
		
		
	)
	
	}

return(
	
	// <AccountForm initialValues={formValues}
	// onSubmit={onSubmit}
	// enableReinitialize>
	// Create Account
	// <div style={style}>
	<div style={{ position: "fixed",top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} > 
	{!loading && <AccountForm initialValues={formValues} onSubmit={onSubmit}
	enableReinitialize>
	Create Account
	</AccountForm>}
	{loading && (<ClipLoader  className="clip"  loading={loading} size={100} />)}
	<div className="message">{message ? <h6>{message}</h6> :null}</div>
	{/* {status?.type === 'success' && <p>"Account succesfully created"</p>}
      {status?.type === 'error' && (
        <p>"Error "</p>)} */}
	  
	{/* <style jsx>{`
        .clip{
			position: fixed,
			 top: 50%,
			  left: 50%, 
			  transform: translate(-50%, -50%)  
 
        }
      `}</style>  */}
	{/* {loading && (<ClipLoader color={'black'} loading={loading} size={100}/>)} */}
	{/* {isModal && (
		<Loaderr/>)}	 */}
	{/* {formValues?formValues :<Backdrop className={Backdrop} open>
        <CircularProgress color="inherit" />
      </Backdrop>} */}
	</div>
)
}


export default Register
