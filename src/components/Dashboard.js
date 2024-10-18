import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { authState } = useAuth();
  const [quote, setQuote] = useState('');
  const [joke, setJoke] = useState('');
  const [username, setUsername] = useState(''); // State for the user's name

  // Fetch the name from localStorage on component mount
  useEffect(() => {
    const storedName = localStorage.getItem('username');
    if (storedName) {
      setUsername(storedName);
    } else if (authState.user?.username) {
      setUsername(authState.user.username);
    }
  }, [authState]);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.freeapi.app/api/v1/public/quotes');
      if (response.data && response.data.data && response.data.data.data.length > 0) {
        const quotes = response.data.data.data;
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex].content);
      } else {
        console.error("No quotes found in the expected structure.");
      }
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://api.freeapi.app/api/v1/public/randomjokes');
      if (response.data && response.data.data && response.data.data.data.length > 0) {
        const jokes = response.data.data.data;
        const randomIndex = Math.floor(Math.random() * jokes.length);
        setJoke(jokes[randomIndex].content);
      } else {
        console.error("Joke content not found.");
      }
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
    fetchJoke();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-4 border-2 m-4 shadow-sm bg-slate-50 rounded-md w-1/2">
        <h2 className="mt-4 font-bold text-xl">Welcome, {username || 'Guest'}!</h2> {/* Display the name */}
        <h2 className="mt-4 font-bold text-xl">Quote of the day:</h2>
        <p className="font-medium">{quote || "Loading quote..."}</p>
        <h2 className="mt-4 font-bold text-xl">Random Joke:</h2>
        <p className="font-medium">{joke || "Loading joke..."}</p>
        <button onClick={() => { fetchQuote(); fetchJoke(); }} className="mt-4 bg-green-500 font-semibold text-white p-2 rounded">
          Get Another Quote and Joke
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
