
// import React,{useEffect, useState} from 'react';
// import * as Yup from "yup";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { FormGroup, FormLabel, Button } from "react-bootstrap";
// // import 'bootstrap/dist/css/bootstrap.css';
// import Styles from './AccountForm.module.css'
// import useUnsavedChangesWarning from './promptComponent';
// //   import Loader from "react-loader-spinner";
// // import Loaderr from './SpinnerLoading';
// // import ClipLoader from "react-spinners/ClipLoader";
// function saveToApi(hobby: string) {
// 	return new Promise<void>((resolve) => {
// 	  setTimeout(() => {
// 		console.log(hobby);
// 		resolve();
// 	  }, 1000);
// 	});
//   }
// const AccountForm = (props) => {
// const validationSchema = Yup.object().shape({
// 	username: Yup.string().required("Required"),
// 	email: Yup.string().required("Required"),
// 	password: Yup.string().required("Required")
// });
// console.log(props);
// // const [name, setName] = useState(props.formValues.username);
// //   const [email, setEmail] = useState(props.formValues.email);
// //   const [id, setId] = useState(props.formValues.id);


// const [value, setValue] = useState(props.initialValues.username);
// const [valuee, setValuee] = useState(props.initialValues.email);
// const [valueee, setValueee] = useState(props.initialValues.password);

//   // A local state where we observe the formState.
//   // For our simple app, the three states 'unchaged', 'modified' and 'saving' are
//   // sufficient. Modify the logic according to your use-case.
//   const [formState, setFormState] = useState<
//     "unchanged" | "modified" | "saving"
//   >("unchanged");

//   // The effect where we show an exit prompt, but only if the formState is NOT
//   // unchanged. When the form is being saved, or is already modified by the user,
//   // sudden page exit could be a destructive action. Our goal is to prevent that.
//   useEffect(() => {
//     // the handler for actually showing the prompt
//     // https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload
//     const handler = (event: BeforeUnloadEvent) => {
//       event.preventDefault();
//       event.returnValue = "";
//     };

//     // if the form is NOT unchanged, then set the onbeforeunload
//     if (formState !== "unchanged") {
//       window.addEventListener("beforeunload", handler);
//       // clean it up, if the dirty state changes
//       return () => {
//         window.removeEventListener("beforeunload", handler);
//       };
//     }
//     // since this is not dirty, don't do anything
//     return () => {};
//   }, [formState]);
  

// // const [loading, setLoading] = useState(false);
// // useEffect(() => {
// //     setLoading(true)
// // 	setTimeout(()=>{
// // 		setLoading(false)
// // 	},2000)
// //   }, []);
// // const [isModal, setState] = useState(false);

// // const toggleUserModal = () => {
// //     setState(true);
// //   };

// //   const handleCloseModal = () => {
// //     setState(false);
// //   };
// //   const closeLoaderIn5Seconds = () => {
// // 	setTimeout(() => {
// // 	  setState(
// // 		false
// // 	  );
// // 	}, 1000);
// //   };
// //   const handleSubmit = e => {
// // 	e.preventDefault();
// // 	setState(
// // 	  true
// // 	);
// // 	closeLoaderIn5Seconds();
// //   };

// //   const nameChangeHandler = (e) => {
// //     setName(e.target.value);
// //     userData.name = e.target.value;
// //   };
// // const al=useUnsavedChangesWarning();

// return (
	
// 	<div className="form-group">
	
		
		
		
		
// 	<br/>
	
// 	<Formik {...props} validationSchema={validationSchema}>
//         <center>
           
// 		<Form className={Styles.form} 
// 		 onSubmit={(e) => {
// 			e.preventDefault();
// 			// form submit logic goes here
// 			// first set formState to saving
// 			setFormState("saving");
// 			// Now call our async function to save to the API
			
// 			  // save is done, so we can reset formState and value
// 			  saveToApi(value).then(() => {
// 				// save is done, so we can reset formState and value
// 				setValue("");

// 				setFormState("unchanged");
// 			  });
//               saveToApi(valuee).then(() => {
// 				// save is done, so we can reset formState and value
// 				setValuee("");
				
// 				setFormState("unchanged");
// 			  });
// 			  saveToApi(valueee).then(() => {
// 				// save is done, so we can reset formState and value
// 				setValueee("");
				
// 				setFormState("unchanged");
// 			  });
// 			}}
			
// 		  > 
// 		<FormGroup>
//         <FormLabel >Name</FormLabel>
// 			<Field   name="username" type="text" value={value}
// 				className="form-control "  onChange={(e) => {
// 					if (e.target.value !== "") {
// 					  setFormState("modified");
// 					} else {
// 					  setFormState("unchanged");
// 					}
// 					setValue(e.target.value);
// 				  }} />
// 			<ErrorMessage
// 			name="username"
// 			className="d-block invalid-feedback"
// 			component="span"
// 			/>
// 		</FormGroup>
//         <br></br>
// 		<FormGroup>
//         <FormLabel>Email</FormLabel>
// 			<Field name="email" type="text" value={valuee}
// 				className="form-control" onChange={(e) => {
// 					if (e.target.value !== "") {
// 					  setFormState("modified");
// 					} else {
// 					  setFormState("unchanged");
// 					}
// 					setValuee(e.target.value);
// 				  }} />
// 			<ErrorMessage
// 			name="email"
// 			className="d-block invalid-feedback"
// 			component="span"
// 			/>
// 		</FormGroup>
//         <br></br>
// 		<FormGroup>
//         <FormLabel>Password</FormLabel>
// 			<Field name="password" type="password" value={valueee}
// 				className="form-control" onChange={(e) => {
// 					if (e.target.password !== "") {
// 					  setFormState("modified");
// 					} else {
// 					  setFormState("unchanged");
// 					}
// 					setValueee(e.target.value);
// 				  }} />
// 			<ErrorMessage
// 			name="password"
// 			className="d-block invalid-feedback"
// 			component="span"
// 			/>
// 		</FormGroup>
//         <br></br>
// 		<Button variant="danger" size="sm"
// 		type="submit"  disabled={formState === "saving"}>
// 		{/* {formState === "saving" ? "SUBMITTING" : "SUBMIT" } */}
// 			{props.children}
// 			{/* {loading && (<ClipLoader color={'black'} loading={loading} size={100}/>)}
// 			{/* {isModal && (
// 		// <Loaderr/>)}	  */}
		  
// 		</Button>
		
// 		</Form>
		 
//         </center>
		
// 	</Formik>
	
// 	<style jsx>{`

//         .form-control{
// 			width:170px;
//         }
//       `}</style>

// 	</div>
	
// );
// };

// export default AccountForm;


import React,{useEffect, useState} from 'react';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormLabel, Button } from "react-bootstrap";
import { useBeforeunload } from 'react-beforeunload';
import Styles from './AccountForm.module.css'



const AccountForm = (props) => {
const validationSchema = Yup.object().shape({
	username: Yup.string().required("Required"),
	email: Yup.string().required("Required"),
	password: Yup.string().required("Required")
});
console.log(props);
useBeforeunload(() => "Are you sure to close this tab?");

// window.addEventListener("beforeunload", (ev) => 
// {  
//     ev.preventDefault();
//     return ev.returnValue = 'Are you sure you want to close?';
// });

// useEffect(() => {
//     window.addEventListener('beforeunload', alertUser)
//     window.addEventListener('unload', handleTabClosing)
//     return () => {
//         window.removeEventListener('beforeunload', alertUser)
//         window.removeEventListener('unload', handleTabClosing)
//     }
// })

// const handleTabClosing = () => {
//     removePlayerFromGame()
// }

// const alertUser = (event:any) => {
//     event.preventDefault()
//     event.returnValue = ''
// }

return (
	
	<div className="form-group">
	
		
		
		
		
	<br/>
	
	<Formik {...props} validationSchema={validationSchema}>
        <center>
           
		<Form className={Styles.form} > 
		<FormGroup>
        <FormLabel >Name</FormLabel>
			<Field   name="username" type="text"
				className="form-control "   />
			<ErrorMessage
			name="username"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
        <br></br>
		<FormGroup>
        <FormLabel>Email</FormLabel>
			<Field name="email" type="text"
				className="form-control" />
			<ErrorMessage
			name="email"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
        <br></br>
		<FormGroup>
        <FormLabel>Password</FormLabel>
			<Field name="password" type="password"
				className="form-control" />
			<ErrorMessage
			name="password"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
        <br></br>
		<Button variant="danger" size="sm"
		type="submit"  >
			{props.children}
			
		  
		</Button>
		
		</Form>
		
        </center>
		
	</Formik>
	
	<style jsx>{`
        .form-control{
			width:170px;
        }
      `}</style>

	</div>
	
);
};

export default AccountForm;





// import React,{useEffect, useState} from 'react';
// // import DialogBox from './DialogBox';
// import useUnsavedChangesWarning from './promptComponent';
// // import { useCallbackPrompt } from './useCallBack';
// import * as Yup from "yup";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { FormGroup, FormLabel, Button } from "react-bootstrap";
// // import 'bootstrap/dist/css/bootstrap.css';
// import Styles from './AccountForm.module.css'
// //   import Loader from "react-loader-spinner";
// // import Loaderr from './SpinnerLoading';
// // import ClipLoader from "react-spinners/ClipLoader";

// const AccountForm = (props) => {
// const validationSchema = Yup.object().shape({
// 	username: Yup.string().required("Required"),
// 	email: Yup.string().required("Required"),
// 	password: Yup.string().required("Required")
// });

// const [username, setName] = useState("");
// const [Prompt, setDirty, setPristine] = useUnsavedChangesWarning();
// // const [state, setState] = useState({})
// // const [showDialog, setShowDialog] = useState<boolean>(false)
// // const [showPrompt, confirmNavigation, cancelNavigation] =
// //   useCallbackPrompt(showDialog)

// // const handleChange = (event: any) => {
// //   const { username, value } =event.target
// //   setState({ ...state, [username]: value })
// //   setShowDialog(true)
// // }
// // console.log(props);

// return (
	
// 	<div className="form-group">
	
// 	{/* <DialogBox
//         // @ts-ignore
//         showDialog={showPrompt}
//         confirmNavigation={confirmNavigation}
//         cancelNavigation={cancelNavigation}
//       /> */}
		
		
		
// 	<br/>
	
// 	<Formik {...props} validationSchema={validationSchema}>
//         <center>
           
// 		<Form className={Styles.form} > 
// 		<FormGroup>
//         <FormLabel >Name</FormLabel>
// 			<Field   name="username" type="text"
// 				className="form-control "  value={username}
// 				onChange={(e) => {
// 					setName(e.target.value);
// 					setDirty();
// 				}} />
// 			<ErrorMessage
// 			name="username"
// 			className="d-block invalid-feedback"
// 			component="span"
// 			/>
// 		</FormGroup>
//         <br></br>
// 		<FormGroup>
//         <FormLabel>Email</FormLabel>
// 			<Field name="email" type="text"
// 				className="form-control" />
// 			<ErrorMessage
// 			name="email"
// 			className="d-block invalid-feedback"
// 			component="span"
// 			/>
// 		</FormGroup>
//         <br></br>
// 		<FormGroup>
//         <FormLabel>Password</FormLabel>
// 			<Field name="password" type="password"
// 				className="form-control" />
// 			<ErrorMessage
// 			name="password"
// 			className="d-block invalid-feedback"
// 			component="span"
// 			/>
// 		</FormGroup>
//         <br></br>
// 		<Button variant="danger" size="sm"
// 		type="submit"  onClick={() => {
// 			setName("");
// 			setPristine();
// 		}}>
// 			{props.children}
// 			{/* {loading && (<ClipLoader color={'black'} loading={loading} size={100}/>)}
// 			{/* {isModal && (
// 		// <Loaderr/>)}	  */}
		 
// 		</Button>
		
// 		</Form>
// 		{/* {Prompt} */}
//         </center>
		
// 	</Formik>
	
// 	<style jsx>{`
//         .form-control{
// 			width:170px;
//         }
//       `}</style>
  
// 	</div>
	
// );
// };

// export default AccountForm;





