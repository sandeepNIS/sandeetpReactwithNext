import React,{useState} from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import Example from "./Modal";



const AccountTableRow = (props) => {

const [name, setName] = useState(props.obj.username);
const [email, setEmail] = useState(props.obj.email);
const [id, setId] = useState(props.obj.id);

let userData = (data) => {
    setName(data.name);
    setEmail(data.email);
	setId(data.id);
  };

const deleteAccount = () => {
	let confirmAction=confirm("are you sure to delete");
	axios
	.delete(`https://b6a4-119-82-104-94.in.ngrok.io/account/delete/` +id)
	.then((res) => {
		if (res.status === 200 && confirmAction) {
		alert("Account successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	
	<tr>
	<td>{name}</td>
	<td>{email}</td>
	<td>
		<Button className="m-1 ms-0 mt-0 "  onClick={deleteAccount}
		size="sm" variant="danger">
		Delete
		</Button>
	<Example 
	name={name}
	id={id}
	email={email}

	getData={userData}

	 />

  
	</td>
	
	</tr>
	
	
);
};

export default AccountTableRow;