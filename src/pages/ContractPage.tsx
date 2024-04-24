import React from 'react';
import { useParams } from 'react-router-dom';
import Contract from '../components/Contract/Contract';
import { contracts } from '../constants/contracts';
import { contractData } from '../constants/contractData';

const ContractPage: React.FC = () => {
    const { id } = useParams();
    const specificProduct = contracts.find((el) => String(el.id) === id);

    return (
        <>
            <h1>Ugovor {specificProduct?.kupac}</h1>
            <Contract item={specificProduct as contractData} />
        </>
    );
};

export default ContractPage;
