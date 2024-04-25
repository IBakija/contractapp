import { Link } from 'react-router-dom';
import { contractData } from '../../shared/constants/contractData';
import { determineStatus } from '../../features/functions/determineStatus';
import style from './Contract.module.scss';
import { formatStringDate } from '../../features/functions/formatStringDate';
import Title from '../../components/Title/Title';

interface Props {
    item: contractData;
}

const Contract: React.FC<Props> = (props) => {
    const { item, ...rest } = props;
    let status = '';

    status = determineStatus(item.status);

    return (
        <div className={style.contractCard} {...rest}>
            <Link
                to={`/contract/${item.id}`}
                aria-label={`Pregledaj ugovor ${item.kupac}`}
                title={`Pregledaj ugovor ${item.kupac}`}
                className={style.contractLink}
            >
                Otvori
            </Link>
            <Title tag="h2" className={style.contractHolder}>
                {item.kupac}
            </Title>
            <div className={style.contractGrid}>
                <p className={style.contractKey}>broj ugovora: </p>
                <p className={style.contractValue}>{item.broj_ugovora}</p>

                <p className={style.contractKey}>Rok isporuke: </p>
                <p className={style.contractValue}>
                    {formatStringDate(item.rok_isporuke)}
                </p>

                <p className={style.contractKey}>Status: </p>
                <p className={`${style.contractStatus} ${status}`}>
                    {item.status}
                </p>
            </div>
        </div>
    );
};

export default Contract;
