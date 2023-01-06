import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader";
import { getUser } from "../../redux/actions/userActions";


export default function Appy() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getUser());
//   }, []);

  const user = useSelector((state:any) => state.users.user);
  return (
    <>
        <h1>users</h1>
        {
            (!user && user == undefined) ? 
                <>
                    <Loader/>
                </>
                :
                user.map((individualUserData: any) => {
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
