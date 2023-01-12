
import React, { useEffect, useState} from "react";
import axios from 'axios';
import AccountForm from "../../components/AccountForm";
import ClipLoader from "react-spinners/ClipLoader";

// import Backdrop from '@material-ui/core/Backdrop';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// import { Loader } from "../../components/SpinnerLoading";

// import SpinnerLoading from "../../components/SpinnerLoading";
// import Loader from "../../components/SpinnerLoading";
const Register = () => {

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
const [formValues, setFormValues] =
	useState({ username:'', email: '', password: '' })

const onSubmit = accountObject => {
	setLoading(true)
	axios.post(
`http://localhost:3080/account/addaccount`,
	accountObject)
	.then(res => {
		if (res.status === 200){
		
	
			alert('Account successfully created')
			
			const { username, email, password } = res.data;

        setFormValues({ username, email, password });
		window.location.reload();
		setLoading(false)
		
			

		}
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}

return(
	
	// <AccountForm initialValues={formValues}
	// onSubmit={onSubmit}
	// enableReinitialize>
	// Create Account
	<div>
	{!loading && <AccountForm initialValues={formValues} onSubmit={onSubmit}
	enableReinitialize>
	Create Account</AccountForm>}
	{loading && (<ClipLoader color={'black'} loading={loading} size={100} text-align={'center'}/>)}
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
