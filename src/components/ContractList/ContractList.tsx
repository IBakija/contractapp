import Contract from '../Contract/Contract';
import style from './ContractList.module.scss';
import { contracts } from '../../constants/contracts';
import { useState } from 'react';
import { Portal, Select } from '@ark-ui/react';

interface Props {
    filterbyActivity?: 'inactive' | 'active';
    filterByName?: string;
}

const ContractList: React.FC<Props> = (props) => {
    let { filterbyActivity, filterByName } = props;
    const [activity, setActivity] = useState('all');
    const [name, setName] = useState('');

    return (
        <>
            <input
                type="text"
                placeholder="Filtriraj po imenu"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <select onChange={(e) => setActivity(e.target.value)}>
                <option value="all">Svi</option>
                <option value="active">Aktivni</option>
                <option value="inactive">Neaktivni</option>
            </select>

            <div className={style.contractList}>
                {contracts
                    .filter(
                        (contract) =>
                            (name !== undefined && name !== ''
                                ? contract.kupac
                                      .toLocaleLowerCase()
                                      .includes(name.toLocaleLowerCase())
                                : true) &&
                            (activity !== 'all' && activity !== undefined
                                ? activity === 'active'
                                    ? contract.status === 'NARUČENO' ||
                                      contract.status === 'KREIRANO'
                                    : contract.status === 'ISPORUČENO'
                                : true)
                    )
                    .map((contract) => {
                        return <Contract item={contract} />;
                    })}
            </div>
        </>
    );
};

export default ContractList;
