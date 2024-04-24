import './global-styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import ContractPage from './pages/ContractPage/ContractPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contract/:id" element={<ContractPage />} />
        </Routes>
    );
}

export default App;
