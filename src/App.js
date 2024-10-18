import React from 'react';
import { AuthProvider } from './context/AuthContext';
import AppRouter from './Router';
import './index.css'; // Tailwind CSS

const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;
