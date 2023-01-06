import React from "react";
// const na=localStorage.getItem('store')
import { useEffect,useState } from "react";
// import usersReducer from "../redux/reducers/userReducer";


const Loader: React.FC = () => {
    const [categoryNameTitle, setCategoryNameTitle] = useState('');

useEffect(() => {
   setCategoryNameTitle(localStorage.getItem("store"));
}, []);
    
    return (
        <>
            <h1>This is a loader. Data Loading from API</h1>
            <h6>{categoryNameTitle}</h6>
        </>
    )
}

export default Loader;