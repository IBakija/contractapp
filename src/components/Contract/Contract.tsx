import style from './Contract.module.scss';

const Contract: React.FC = () => {
    return (
        <div className={style.contractCard}>
            <h3 className={style.contractHolder}>Kupac Kupčević</h3>
            <div className={style.contractGrid}>
                <p className={style.contractKey}>broj ugovora: </p>
                <p className={style.contractValue}>1/2024</p>

                <p className={style.contractKey}>Rok isporuke: </p>
                <p className={style.contractValue}>20.04.2024.</p>

                <p className={style.contractKey}>Status: </p>
                <p className={`${style.contractStatus} delivered`}>Kreirano</p>
            </div>
        </div>
    );
};

export default Contract;
