import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/common/Header';


// API User ID and Key for access
const clientID = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

function App() {

  const [accessToken, setAccessToken] = useState();
  
  useEffect(()=> {
    // Storing the fetch parameters for readability
    let authCredentials = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body:
        "grant_type=client_credentials&client_id="+clientID+"&client_secret="+clientSecret,
    };

    // Fetch returns access token object with 3 key-values: access_token, token_type, and expires_in
    fetch("https://accounts.spotify.com/api/token", authCredentials)
      .then((response) => response.json())
      .then((data) => {
        setAccessToken(data.access_token);
      }
    );
  }, []);

console.log(accessToken);

  return (
    <div>
      <Header />
    </div>
  )
}

export default App
