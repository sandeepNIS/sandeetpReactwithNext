import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import AccountTableRow from "../../components/AccountTableRow";
const List = () => {
const [accounts, setAccounts] = useState([]);


	
useEffect(() => {
	axios.get(
		`https://b6a4-119-82-104-94.in.ngrok.io/account/list`)
	.then(({ data }) => {
		setAccounts(data);
		if (data.status === 200 ) {
			console.log("acount list");
		} else Promise.reject();
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return accounts.map((res, i) => {
	return <AccountTableRow obj={res} key={i}   />;
	});
};

return (
	<div>
		 <br />
	<div  className="table-wrapper table-responsive table-responsive{-sm|-md|-lg|-xl}   overflow-x:auto;" >
		
	<Table className="table" striped bordered hover  responsive size="sm" w-auto="true" >
		<thead>
		
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
