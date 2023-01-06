import axios from "axios";
import React, { useState, useEffect } from "react";

// Import hooks provided by react-redux
import { useSelector, useDispatch } from "react-redux";

import { getUsersData } from "../redux/actions/userActions";
import Loader from "./loader";    

const BasicDetails: React.FC = () => {
    // const usersData = useSelector((state: any) => state?.users?.users);
    // const usersData = useSelector((state: any) => state?.users?.usersData);
    const usersData = useSelector((state: any) => state?.user?.usersData);
    const dispatch = useDispatch();

    //action creater returns an action 
    //what thunk brings us
    //the ability to return a fucntion instead of an action object
    const fetchUsers = async () => {
       const response=await axios.get("http://localhost:3080/account/list")
        .then((res) => {
            
            dispatch(getUsersData(res.data))
            
            console.log(res.data)
        })
    }

    
    

//Redux Thunk is a middleware that allows you to call the action 
// creators that return a function(thunk) which takes the store’s dispatch method as 
// the argument and which is afterwards used to dispatch the
//  synchronous action after the API or side effects has been finished.




    useEffect(() => {
        fetchUsers()
    //    console.log(localStorage.getItem('store'),"hai");
        
    //    if ( data !== null ) fetchUsers(JSON.parse(data));
    },[])

    return (
        <>
            <h1>users</h1>
            {
                (!usersData && usersData == undefined) ? 
                    <>
                        <Loader/>
                    </>
                    :
                     usersData.map((individualUserData: any) => {
                        return (
                            <>  
                                <h3>id: {individualUserData.id}</h3>
                                <h4>username: {individualUserData.username}</h4>
                                <h4>email: {individualUserData.email}</h4>
                            </>
                        )
                    })  
            }
        
        </>
        
    )
}

export default BasicDetails;


    // const fetchUsers= () =>
    //     return function(dispatch){
            
    //         axios.get("http://localhost:3080/account/list")
    //         .then((res) => {
    //             //res.data is array of users
    //             dispatch(getUsersData(res.data))
    //                 }).catch(error=>{
    //                     //error.message gives the description   
    //                     console.log(error.message);
                        
    //                 })
    //     }
    // }