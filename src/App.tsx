import React from 'react';
import './global-styles/App.scss';
import Contract from './components/Contract/Contract';
import ContractList from './components/ContractList/ContractList';

function App() {
    return (
        <div className="App">
            <ContractList />
        </div>
    );
}

export default App;
