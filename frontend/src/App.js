import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home/Home';

const theme = {
  colors: {
    spaceCadet: '#2d275fff',
    periwinkle: '#cebfe9ff',
    royalPurple: '#674bb0ff',
    amethyst: '#7f6bb9ff',
    paynesGray: '#5d606fff',
    white: '#ffffffff',
  },
};

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </Router>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;