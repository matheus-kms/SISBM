import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/Login';
import HomePage from './components/Home';
import PlanilhaPage from './components/plani/Planilha';
import ContratoPage from './components/Contrato';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/planilha" element={<PlanilhaPage />} />
        <Route path="/Contrato" element={<ContratoPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
