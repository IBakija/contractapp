import Contract from '../Contract/Contract';
import style from './ContractList.module.scss';
import { contracts } from '../../constants/contracts';

const ContractList: React.FC = () => {
    return (
        <div className={style.contractList}>
            {contracts.map((contract) => {
                return <Contract item={contract} />;
            })}
        </div>
    );
};

export default ContractList;
