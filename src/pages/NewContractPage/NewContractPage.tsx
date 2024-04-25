import { useState } from 'react';

import style from './NewContractPage.module.scss';
import Layout from '../Layout';
import TextInput from '../../components/TextInput/TextInput';
import InputLabel from '../../components/InputLabel/InputLabel';
import Title from '../../components/Title/Title';

import { contractData } from '../../shared/types/contractData';

const NewContractPage: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const contracts = JSON.parse(localStorage.getItem('contracts') || '');

    function handleOnSubmit(e: React.SyntheticEvent) {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            fullName: { value: string };
            paymentDate: { value: Date };
            deliveryDate: { value: Date };
        };

        const maxId = contracts.reduce(
            (prev: contractData, current: contractData) =>
                prev && prev.id > current.id ? prev : current
        ).id;

        let contractNumbers: number[] = [];
        contracts.map((c: contractData) =>
            contractNumbers.push(parseInt(c.broj_ugovora.split('/')[0]))
        );

        const maxContract = contractNumbers.reduce((prev, current) =>
            prev > current ? prev : current
        );

        const newContract: contractData = {
            id: maxId + 1,
            broj_ugovora: `${maxContract + 1}/${new Date().getFullYear()}`,
            kupac: target.fullName.value,
            datum_akontacije: target.paymentDate.value.toString(),
            rok_isporuke: target.deliveryDate.value.toString(),
            status: 'KREIRANO',
        };

        let oldContracts: Array<contractData> = JSON.parse(
            localStorage.getItem('contracts') || ''
        );

        oldContracts.push(newContract);

        localStorage.setItem('contracts', JSON.stringify(oldContracts));

        (e.target as HTMLFormElement).reset();
        setSubmitted(true);

        setTimeout(() => setSubmitted(false), 6000);
    }

    return (
        <Layout>
            <section className={style.formSection}>
                <Title tag="h1">Kreiraj novi ugovor</Title>
                <form
                    onSubmit={handleOnSubmit}
                    className={style.form}
                    id="forn"
                >
                    <div>
                        <InputLabel htmlFor="fullName" className={style.label}>
                            Ime kupca*
                        </InputLabel>
                        <TextInput
                            type="text"
                            name="fullName"
                            id="fullName"
                            placeholder="Vanja Horvat"
                            required={true}
                        />
                    </div>
                    <div>
                        <InputLabel
                            htmlFor="paymentDate"
                            className={style.label}
                        >
                            Datum akontacije*
                        </InputLabel>
                        <TextInput
                            type="date"
                            name="paymentDate"
                            id="paymentDate"
                            required={true}
                        />
                    </div>
                    <div>
                        <InputLabel
                            htmlFor="deliveryDate"
                            className={style.label}
                        >
                            Rok isporuke*
                        </InputLabel>
                        <TextInput
                            type="date"
                            name="deliveryDate"
                            id="deliveryDate"
                            required={true}
                        />
                    </div>
                    <button>Kreiraj</button>
                </form>

                {submitted ? (
                    <div className={style.infoAlert}>
                        Uspješno kreiran ugovor!
                    </div>
                ) : (
                    <></>
                )}
            </section>
        </Layout>
    );
};

export default NewContractPage;
