import React from 'react';
import { useParams } from 'react-router-dom';
import { contracts } from '../../shared/constants/contracts';
import Layout from '../Layout';
import ArticleList from '../../components/ArticleList/ArticleList';
import { determineStatus } from '../../features/functions/determineStatus';
import { formatStringDate } from '../../features/functions/formatStringDate';
import Title from '../../components/Title/Title';
import style from './ContractPage.module.scss';

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
                    datum akontacije:{' '}
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
