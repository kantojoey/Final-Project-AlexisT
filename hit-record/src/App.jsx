import './App.css';
import React, { useEffect, useState } from 'react';


// API User ID and Key for access
const clientID = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

function App() {

  const [accessToken, setAccessToken] = useState();
  
  useEffect(()=> {
    let authCredentials = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body:
        "grant_type=client_credentials&client_id="+clientID+"&client_secret="+clientSecret,
    };

    // Fetch returns access token object with: access_token, token_type, and expires_in
    fetch("https://accounts.spotify.com/api/token", authCredentials)
      .then((response) => response.json())
      .then((data) => {
        setAccessToken(data.access_token);
      }
    );
  }, []);


  return (
    <div>
      <h1>Hit Record</h1>
    </div>
  )
}

export default App
