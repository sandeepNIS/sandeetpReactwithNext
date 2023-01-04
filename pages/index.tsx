import React, { useState, useEffect } from "react";
import axios from "axios";
import router, { useRouter } from 'next/router';
import { Table } from "react-bootstrap";
import AccountTableRow from "../components/AccountTableRow";

export async function getServerSideProps(context){
	// const allPostsData = getSortedPostsData();
	const res = await fetch(`https://27f3-119-82-104-94.in.ngrok.io/account/list`)
	const posts = await res.json();
	return {
	  props: {
		posts,
	  },
	};
  }
const Listt = ({posts}) => {
// 	const router = useRouter();
//   // Call this function whenever you want to
//   // refresh props!
//   const refreshData = () => {
//     router.replace(router.asPath);
//   }
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const refreshData = () => {
    router.replace(router.asPath);
    setIsRefreshing(true);
  };
  React.useEffect(() => {
    setIsRefreshing(false);
  }, [posts]);
const [accounts, setAccounts] = useState([]);


	
// useEffect(() => {
// 	axios
// 	.get(`https://b6a4-119-82-104-94.in.ngrok.io/account/list`)
// 	.then(({ data }) => {
// 		setAccounts(data);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});
// }, []);
useEffect(() => {
		setAccounts(posts);
	});


const DataTable = () => {
	return accounts.map((res, i) => {
	return <AccountTableRow obj={res} key={i}   />;
	});
};

return (
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
	
);
};

export default Listt;