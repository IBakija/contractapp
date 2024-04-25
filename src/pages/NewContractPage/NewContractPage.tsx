import style from './NewContractPage.module.scss';
import Layout from '../Layout';
import TextInput from '../../components/TextInput/TextInput';

const NewContractPage: React.FC = () => {
    return (
        <Layout>
            <section className={style.nav}>
                <form>
                    <TextInput type="text" />
                </form>
            </section>
        </Layout>
    );
};

export default NewContractPage;
