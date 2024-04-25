import { useState } from 'react';

import style from './ContractList.module.scss';
import Contract from '../Contract/Contract';
import FilterByName from '../Filters/FilterByName';

import { contracts } from '../../constants/contracts';
import FilterByActivity from '../Filters/FilterByActivity';

const ContractList: React.FC = () => {
    const [activity, setActivity] = useState('all');
    const [name, setName] = useState('');

    const onInputChangeHandler = (newText: string) => {
        setName(newText);
    };
    const onSelectChangeHandler = (newText: string) => {
        setActivity(newText);
    };

    type OptionItem = { label: string; value: string; disabled?: boolean };

    const ActivityItems: OptionItem[] = [
        { label: 'Svi', value: 'all' },
        { label: 'Aktivni', value: 'active' },
        { label: 'Neaktivni', value: 'inactive' },
    ];

    return (
        <>
            <div className={style.filterContainer}>
                <FilterByName
                    onInputChange={onInputChangeHandler}
                    type="text"
                    placeholder="Filtriraj po imenu"
                />
                <FilterByActivity onSelectChange={onSelectChangeHandler}>
                    {ActivityItems.map((item) => {
                        return <option value={item.value}>{item.label}</option>;
                    })}
                </FilterByActivity>
            </div>

            <div className={style.contractList}>
                {contracts
                    .filter(
                        (contract) =>
                            (name !== undefined && name !== ''
                                ? contract.kupac
                                      .toLocaleLowerCase()
                                      .includes(name.toLocaleLowerCase())
                                : true) &&
                            (activity !== 'all' && activity !== ''
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
