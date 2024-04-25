import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Layout';
import ArticleList from '../../widgets/ArticleList/ArticleList';
import { determineStatus } from '../../features/functions/determineStatus';
import { formatStringDate } from '../../features/functions/formatStringDate';
import Title from '../../components/Title/Title';
import style from './ContractPage.module.scss';
import { contractData } from '../../shared/types/contractData';

const ContractPage: React.FC = () => {
    const { id } = useParams();

    const contracts = JSON.parse(localStorage.getItem('contracts') || '');
    const specificProduct = contracts.find(
        (contract: contractData) => String(contract.id) === id
    );

    if (!specificProduct) {
        return (
            <section>
                <h1>Ooops ovaj ugovor ne postoji</h1>
                <p>Molimo vratite se na početnu stranicu</p>
                <a href="/">Početna</a>
            </section>
        );
    }
    const status = determineStatus(specificProduct.status);

    return (
        <Layout>
            <section>
                <div>
                    <Title tag="h1" className={style.h1}>
                        Ugovor {specificProduct?.kupac}
                    </Title>
                    <span className={`${status}`}>
                        {' '}
                        {specificProduct?.status}
                    </span>
                </div>
                <p>Broj ugovora: {specificProduct?.broj_ugovora}</p>
                <p>
                    Datum akontacije:{' '}
                    {formatStringDate(specificProduct?.datum_akontacije)}
                </p>
                <p>
                    Rok isporuke:{' '}
                    {formatStringDate(specificProduct?.rok_isporuke)}
                </p>
                <hr />
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
