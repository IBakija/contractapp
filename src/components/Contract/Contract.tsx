import { Item } from '@ark-ui/react/accordion/accordion';
import style from './Contract.module.scss';

interface contractData {
    id: number;
    kupac: string;
    broj_ugovora: string;
    datum_akontacije: string;
    rok_isporuke: string;
    status: string;
}

interface Props {
    item: contractData;
}

const Contract: React.FC<Props> = (props) => {
    const { item } = props;
    let status = '';

    switch (item.status.toLocaleLowerCase()) {
        case 'kreirano':
            status = 'created';
            break;
        case 'naručeno':
            status = 'ordered';
            break;
        case 'isporučeno':
            status = 'delivered';
            break;
        default:
            status = 'created';
    }

    return (
        <div className={style.contractCard}>
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
