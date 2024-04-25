import './shared/global-styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import ContractPage from './pages/ContractPage/ContractPage';
import NewContractPage from './pages/NewContractPage/NewContractPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contract/:id" element={<ContractPage />} />
            <Route path="/create-contract/" element={<NewContractPage />} />
        </Routes>
    );
}

export default App;
