
import React, { useState} from "react";
import axios from 'axios';
import AccountForm from "../../components/AccountForm";
import Link from "next/link";
import ButtonLoading from "../../components/ButtonLoading"
// import { Loader } from "../../components/SpinnerLoading";

// import SpinnerLoading from "../../components/SpinnerLoading";
// import Loader from "../../components/SpinnerLoading";
const Register = () => {
	
const [formValues, setFormValues] =
	useState({ username:'', email: '', password: '' })

const onSubmit = accountObject => {
	axios.post(
`https://7df4-119-82-104-94.in.ngrok.io/account/addaccount`,
	accountObject)
	.then(res => {
		if (res.status === 200){
			
			alert('Account successfully created')
			const { username, email, password } = res.data;
        setFormValues({ username, email, password });
		window.location.reload();
		}
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}

return(
	
	<AccountForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create Account
	</AccountForm>
)
}


export default Register
