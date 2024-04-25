import style from './NewContractPage.module.scss';
import Layout from '../Layout';
import TextInput from '../../components/TextInput/TextInput';
import InputLabel from '../../components/InputLabel/InputLabel';
import Title from '../../components/Title/Title';
import { contracts } from '../../shared/constants/contracts';
import { contractData } from '../../shared/constants/contractData';
import { useState } from 'react';

// interface ContractData {
// 	item: contractData;
// }

const NewContractPage: React.FC = () => {
    const [inputs, setInputs] = useState({});

    //   const handleChange = (event: React.FormEvent) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setInputs(values => ({...values, [name]: value}))
    //   }

    function handleOnSubmit(e: React.SyntheticEvent) {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            fullName: { value: string };
            paymentDate: { value: Date };
            deliveryDate: { value: Date };
        };

        const maxId = contracts.reduce((prev, current) =>
            prev && prev.id > current.id ? prev : current
        ).id;

        let x: number[] = [];
        contracts.map((c) => x.push(parseInt(c.broj_ugovora.split('/')[0])));

        const maxUgovor = x.reduce((prev, current) =>
            prev > current ? prev : current
        );

        const newContract = {
            id: maxId + 1,
            broj_ugovora: `${maxUgovor + 1}/${new Date().getFullYear()}`,
            kupac: target.fullName.value,
            datum_akontacije: target.paymentDate.value,
            rok_isporuke: target.deliveryDate.value,
        };
        localStorage.setItem('newContract', JSON.stringify(newContract));

        console.log(JSON.parse(localStorage.getItem('newContract') || ''));
    }

    return (
        <Layout>
            <section className={style.nav}>
                <Title tag="h1">Kreiraj novi ugovor</Title>
                <form onSubmit={handleOnSubmit}>
                    <div>
                        <InputLabel htmlFor="fullName">Ime kupca</InputLabel>
                        <TextInput type="text" name="fullName" id="fullName" />
                    </div>
                    <div>
                        <InputLabel htmlFor="paymentDate">
                            Datum akontacije
                        </InputLabel>
                        <TextInput
                            type="date"
                            name="paymentDate"
                            id="paymentDate"
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="deliveryDate">
                            Rok isporuke
                        </InputLabel>
                        <TextInput
                            type="date"
                            name="deliveryDate"
                            id="deliveryDate"
                        />
                    </div>
                    <div>
                        <button>Kreiraj</button>
                    </div>
                </form>
            </section>
        </Layout>
    );
};

export default NewContractPage;
