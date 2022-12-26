import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
// import '../Component/RespTable.css';
// import AccountTableRow from "../Component/AccountTableRow";
import AccountTableRow from "../../components/AccountTableRow";
// import Navbar from "..";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

// import ModalList from "../Component/Modal2";

const List = () => {
const [accounts, setAccounts] = useState([]);

// const handleClicko=(e)=>{
//     setAccounts(e.target.value);
//     // e.preventDefault();
//     }
	
useEffect(() => {
	axios
	.get(`http://localhost:3080/account/list`)
	.then(({ data }) => {
		setAccounts(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);
//handleClicko={handleClicko} 
const DataTable = () => {
	return accounts.map((res, i) => {
	return <AccountTableRow obj={res} key={i}   />;
	});
};

return (
	<div>
	<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light" >
        
        <Link href="/posts/home" className="navbar-brand">MyApp</Link>
        <ul className='navbar-nav'>
            <li className="nav-item active">
            <Link href="/posts/register" className="nav-link">Register</Link> 
                </li>
                <li className='nav-item '>
                <Link href="/posts/list" className="nav-link">List</Link> 
            </li>
        </ul>
    </nav>
	<br/>
	</div>
	<div  className="table-wrapper table-responsive table-responsive{-sm|-md|-lg|-xl}   overflow-x:auto;" >
		{/* //table-responsive size="sm" */}
	<Table className="table" striped bordered hover  responsive size="sm" w-auto >
		<thead>
		{/* onClick={<ModalList/>} */}
		<tr >
			<th> Name </th>
			<th> Email </th>
			<th> Action </th>
			
			
		</tr>
		</thead>
		<tbody>{DataTable()}
		</tbody>
	</Table>
	</div>
	</div>
	
);
};

export default List;
