import ContractList from '../../widgets/ContractList/ContractList';
import Title from '../../components/Title/Title';
import Layout from '../Layout';
import style from './HomePage.module.scss';

const HomePage: React.FC = () => {
    return (
        <Layout>
            <section>
                <Title tag="h1" className={style.h1}>
                    Kupoprodajni ugovori
                </Title>
                <ContractList />
            </section>
        </Layout>
    );
};

export default HomePage;
