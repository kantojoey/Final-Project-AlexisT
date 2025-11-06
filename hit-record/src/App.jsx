import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/common/Header';
import { Route, Routes } from 'react-router';
import LoadingPage from './components/pages/LoadingPage';
import HomePage from './components/pages/HomePage';
import ListeningLogPage from './components/pages/ListeningLogPage';
import AboutPage from './components/pages/AboutPage';
import SearchPage from './components/pages/SearchPage';
import ProfilePage from './components/pages/ProfilePage';


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
      <Routes>
        <Route path="/" element={<LoadingPage />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/listening-log" element={<ListeningLogPage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/search" element={<SearchPage />}/>
        <Route path="/profile" element={<ProfilePage />}/>
      </Routes>

    </div>
  )
}

export default App
