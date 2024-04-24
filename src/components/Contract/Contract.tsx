import { contractData } from '../../constants/contractData';
import { determineStatus } from '../../constants/determineStatus';
import style from './Contract.module.scss';

interface Props {
    item: contractData;
}

const Contract: React.FC<Props> = (props) => {
    const { item } = props;
    let status = '';

    status = determineStatus(item.status);

    return (
        <div className={style.contractCard} key={item.id}>
            <a
                href={`/contract/${item.id}`}
                aria-label={`Pregledaj ugovor ${item.kupac}`}
                title={`Pregledaj ugovor ${item.kupac}`}
                className={style.contractLink}
            >
                Otvori
            </a>
            <h3 className={style.contractHolder}>{item.kupac}</h3>
            <div className={style.contractGrid}>
                <p className={style.contractKey}>broj ugovora: </p>
                <p className={style.contractValue}>{item.broj_ugovora}</p>

                <p className={style.contractKey}>Rok isporuke: </p>
                <p className={style.contractValue}>{item.rok_isporuke}</p>

                <p className={style.contractKey}>Status: </p>
                <p className={`${style.contractStatus} ${status}`}>
                    {item.status}
                </p>
            </div>
        </div>
    );
};

export default Contract;
