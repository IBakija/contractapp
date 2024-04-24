import React from 'react';
import './global-styles/App.scss';
import ContractList from './components/ContractList/ContractList';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContractPage from './pages/ContractPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contract/:id" element={<ContractPage />} />
        </Routes>
    );
}

export default App;
