import Title from '../../components/Title/Title';
import style from '../Contract/Contract.module.scss';

import { articleData } from '../../shared/types/articleData';
import { determineStatus } from '../../features/functions/determineStatus';

interface Props {
    item: articleData;
}

const Article: React.FC<Props> = (props) => {
    const { item } = props;
    let status = '';

    status = determineStatus(item.status);

    return (
        <div className={style.contractCard} key={item.id}>
            <Title tag="h2" className={style.contractHolder}>
                {item.naziv}
            </Title>
            <div className={style.contractGrid}>
                <p className={style.contractKey}>Dobavljač: </p>
                <p className={style.contractValue}>{item.dobavljac}</p>

                <p className={style.contractKey}>Status: </p>
                <p className={`${style.contractStatus} ${status}`}>
                    {item.status}
                </p>
            </div>
        </div>
    );
};

export default Article;
