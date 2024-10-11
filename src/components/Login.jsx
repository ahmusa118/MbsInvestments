import React, { useState, useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from './config/FirebaseConfig';
import {Form,Input,Button} from 'antd'
const Login = () => {
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const [isLoading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
const Navigate=useNavigate()




const fetchData = async (key) => {
    try {
      const response = await fetch('https://mangaautomobiles.com/api/userdashboard', {
        method: 'GET',
        headers: { Authorization: `Bearer ${key}` },
      });


      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData)
        if (responseData.verified === 'No') {
          Navigate('/verify', { state: responseData });
        } else {
          Navigate('/uploadcar', { state: responseData });
        }
      } else {
        message.error('Error fetching data from the server');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      message.error('An error occurred while fetching data');
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://mangaautomobiles.com/api/userlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
      setLoading(false);
      setEmail('');
      setPassword('');

      if (response.ok) {
        const data = await response.json();

        if (data.token) {
   
          await fetchData(data.token);
        } else if (data.error) {
          message.error(data.error);
        }
      } else {
        setLoading(false);
        alert('Error logging in');
      }
    } catch (error) {
      setLoading(false);
    
      alert('An error occurred while logging in');
      console.log(error)
    }
  };











    const handleGoogle = async () => {
      try {
        provider.setCustomParameters({
            prompt: 'select_account' // Forces the Google sign-in popup to display the account chooser
          })
          const result = await signInWithPopup(auth, provider) 
          .then((result) => {
            console.log("Logged In", result);
          })
          .catch((error) => {
            console.log(error);
          }); // Authenticate with Google
          
         
          const loggedInUser = result
          ; // Get the signed-in user info
        
          // Fetch the API with the user's email
          const response = await fetch(`http://localhost:3000/checkverification/${loggedInUser.email}`,{method:'POST'});
          const data = await response.json(); // Parse the JSON response
          
          console.log('Logged in User:', loggedInUser); // Log the user details
          console.log('API Response:', data); // Log the API response data
          
  
          if(data.verified=='Yes'){
        if(data.token<1){
          Navigate('/buytoken',{state:data})
        }else{
          Navigate('/uploadcar',{state:data})
        }
          }else {
           Navigate('/verify',{state:data})
          }
      } catch (error) {
          // Handle errors
          console.error('Error during Google sign-in:', error.code);
          console.error('Error message:', error.message);
      }
  };
  


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in.
            const fetchVerificationStatus = async () => {
                try {
                    const response = await fetch(`http://localhost:3000/checkverification/${user.email}`, { method: 'POST' });
                    const data = await response.json(); // Parse the JSON response
                    
                    if(data.verified=='Yes'){
                        if(data.token<1){
                          Navigate('/buytoken',{state:{details:data}})
                        }else{
                          Navigate('/uploadcar',{state:data})
                        }
                          }else {
                           Navigate('/verify',{state:data})
                          }
                } catch (error) {
                    console.error('Error fetching verification data:', error);
                }
            };

            fetchVerificationStatus();
        } else {
            // User is signed out.
            setUser(null);
        }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
}, [auth]);

    { /*<div>
       
 

</div>*/}
    return (
      
    <Form className="p-6 sm:w-1/2 mx-auto">
    <Form.Item label="Email address">
      <Input
        type="email"
        className=""
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
    </Form.Item>

    <Form.Item label="Password">
      <Input.Password
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        value={password}
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2"
      />
    </Form.Item>

    <Form.Item>
      <Button
        disabled={isLoading || !email || !password}
        onClick={handleSubmit}
        className="mb-2"
      >
        {isLoading ? 'Loading…' : 'Submit'}
      </Button>
    </Form.Item>
    <p>
      Don't have an account as a seller?{' '}
      <span onClick={() => Navigate('/sellersignup')} style={{ cursor: 'pointer', color: 'blue' }}>
        Sign up here
      </span>
      .
    </p>
    
    <p>
      <span onClick={() => Navigate('/forgotsellerpassword')} style={{ cursor: 'pointer', color: 'blue' }}>
        Forgot your password?
      </span>
    </p>
    OR
    <Button
        className='flex flex-row items-center gap-1 bg-[#faf9f6] rounded-md p-1 border'
        onClick={handleGoogle}
    >
        <p>Sign in with Google</p>
        <FcGoogle className='google-icon'/>
    </Button>
  </Form>
    );
};

export default Login;
