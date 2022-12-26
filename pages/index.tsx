//  function Navba(){
//     return(
//         <div>
//       <center>
//       <h2>Welcome to our website</h2>
//       </center>
//       </div> ) 
    
// }
// export default Navba
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import AccountTableRow from "../components/AccountTableRow";
const Listt = () => {
const [accounts, setAccounts] = useState([]);


	
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

const DataTable = () => {
	return accounts.map((res, i) => {
	return <AccountTableRow obj={res} key={i}   />;
	});
};

return (
	<div>
	<div  className="table-wrapper table-responsive table-responsive{-sm|-md|-lg|-xl}   overflow-x:auto;" >
		
	<Table className="table" striped bordered hover  responsive size="sm" w-auto >
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

export default Listt;
