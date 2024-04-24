import React from 'react';
import { redirect, useParams } from 'react-router-dom';
import { contracts } from '../../constants/contracts';
import Layout from '../Layout';
import ArticleList from '../../components/ArticleList/ArticleList';

const ContractPage: React.FC = () => {
    const { id } = useParams();
    const specificProduct = contracts.find((el) => String(el.id) === id);

    if (!specificProduct) {
        return (
            <section>
                <h1>Ooops ovaj ugovor ne postoji</h1>
                <p>Molimo vratite se na početnu stranicu</p>
                <a href="/">Početna</a>
            </section>
        );
    }

    return (
        <Layout>
            <section>
                <div>
                    <h1>Ugovor {specificProduct?.kupac}</h1>
                    <span> {specificProduct?.status}</span>
                </div>
                <p>Broj ugovora: {specificProduct?.broj_ugovora}</p>
                <p>Rok isporuke: {specificProduct?.rok_isporuke}</p>
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
