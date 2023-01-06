import Link from 'next/link';
import { useSelector } from 'react-redux'
    import Loader from '../../components/loader';
    
    export default function Home() {
      
    
    
  
    // const usersData = useSelector((state: any) => state?.users?.users);
    const usersData = useSelector((state: any) => state?.user?.usersData);
    // const usersData = useSelector((state: any) => state?.users?.users);
      return (
        <>
        
        <h1>Users list</h1>
        
              {      
            
                   (!usersData && usersData === undefined) ? 
                   <>
                       <Loader/>
                       <Link href="/posts/list">please click on this list page it will load the api and come back to this you will get the updated data</Link>
                   </>:
                   
                   usersData.map((individualUserData: any) => (
                        <>
                            <h3>id: {individualUserData.id}</h3>
                            <h4>name: {individualUserData.username}</h4>
                            <h4>email: {individualUserData.email}</h4>
                <h4>password: {individualUserData.password}</h4>
                        </>
              ))  
    
              
              
            }
    
            
                    
               
               
            </>
            
        )
        
    
    }
    
      