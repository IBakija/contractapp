import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Layout from '../Layout';
import ArticleList from '../../widgets/ArticleList/ArticleList';
import Title from '../../components/Title/Title';
import style from './ContractPage.module.scss';
import TextInput from '../../components/TextInput/TextInput';
import InputLabel from '../../components/InputLabel/InputLabel';

import { determineStatus } from '../../features/functions/determineStatus';
import { formatStringDate } from '../../features/functions/formatStringDate';
import { contractData } from '../../shared/types/contractData';
import Button from '../../components/Button/Button';

// TODO: redirect on non-existing id
const ContractPage: React.FC = () => {
    const { id } = useParams();

    const contracts = JSON.parse(localStorage.getItem('contracts') || '');

    const specificProduct = contracts.find(
        (contract: contractData) => String(contract.id) === id
    );

    const [deliveryDate, setDeliveryDate] = useState(
        specificProduct.rok_isporuke
    );

    const [status, setStatus] = useState(specificProduct.status);

    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            deliveryDate: { value: Date };
        };

        contracts.find(
            (c: contractData) => c.id === specificProduct.id
        ).rok_isporuke = target.deliveryDate.value.toString();

        localStorage.setItem('contracts', JSON.stringify(contracts));

        setDeliveryDate(target.deliveryDate.value.toString());
    }

    let statusButton;

    switch (determineStatus(specificProduct.status)) {
        case 'created':
            statusButton = (
                <div>
                    <p>Izmjeni u naručeno</p>
                    <Button onClick={handleClick}>Izmjeni</Button>
                </div>
            );
            break;
        case 'ordered':
            statusButton = (
                <div>
                    <p>Izmjeni u dostavljeno</p>
                    <Button onClick={handleClick}>Izmjeni</Button>
                </div>
            );
            break;
        default:
            statusButton = <></>;
    }

    function handleClick(e: React.SyntheticEvent) {
        e.preventDefault();

        if (determineStatus(specificProduct.status) === 'created') {
            contracts.find(
                (c: contractData) => c.id === specificProduct.id
            ).status = 'NARUČENO';
        } else if (determineStatus(specificProduct.status) === 'ordered') {
            contracts.find(
                (c: contractData) => c.id === specificProduct.id
            ).status = 'ISPORUČENO';
        }

        localStorage.setItem('contracts', JSON.stringify(contracts));
        setStatus(specificProduct.status);
    }
    return (
        <Layout>
            <section className={style.hero}>
                <div className={style.titleContainer}>
                    <Title tag="h1" className={style.h1}>
                        Ugovor {specificProduct?.kupac}
                    </Title>
                    <span
                        className={`${style.contractStatus} ${determineStatus(
                            status
                        )}`}
                    >
                        {' '}
                        {specificProduct?.status}
                    </span>
                </div>
                <p>
                    <span className={style.contractKey}>Broj ugovora: </span>
                    {specificProduct?.broj_ugovora}
                </p>
                <p>
                    <span className={style.contractKey}>
                        Datum akontacije:{' '}
                    </span>
                    {formatStringDate(specificProduct?.datum_akontacije)}
                </p>
                <p>
                    <span className={style.contractKey}>Rok isporuke: </span>
                    {formatStringDate(deliveryDate)}
                </p>
                {determineStatus(specificProduct.status) !== 'delivered' ? (
                    <div className={style.contractFormContainer}>
                        <form onSubmit={handleSubmit}>
                            <InputLabel
                                htmlFor="deliveryDate"
                                className={style.label}
                            >
                                Izmjeni rok isporuke:
                            </InputLabel>
                            <TextInput
                                type="date"
                                name="deliveryDate"
                                id="deliveryDate"
                                required={true}
                            />
                            <Button>Izmjeni</Button>
                        </form>
                        {statusButton}
                    </div>
                ) : (
                    <></>
                )}
            </section>
            <section>
                <ArticleList
                    contractId={
                        specificProduct !== null ? specificProduct?.id : 0
                    }
                />
            </section>
        </Layout>
    );
};

export default ContractPage;
