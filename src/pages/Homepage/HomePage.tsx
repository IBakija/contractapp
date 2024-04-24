import ContractList from '../../components/ContractList/ContractList';
import Layout from '../Layout';

const HomePage: React.FC = () => {
    return (
        <Layout>
            <h1>Kupoprodajni ugovori</h1>
            <ContractList />
        </Layout>
    );
};

export default HomePage;
