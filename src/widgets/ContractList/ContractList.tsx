import { useState } from 'react';

import style from './ContractList.module.scss';
import Contract from '../../entities/Contract/Contract';
import FilterByName from '../../features/filters/FilterByName';

import FilterByActivity from '../../features/filters/FilterByActivity';
import { contractData } from '../../shared/types/contractData';

const ContractList: React.FC = () => {
    const [activity, setActivity] = useState('all');
    const [name, setName] = useState('');

    const onInputChangeHandler = (newText: string) => {
        setName(newText);
    };
    const onSelectChangeHandler = (newText: string) => {
        setActivity(newText);
    };

    const contracts = JSON.parse(localStorage.getItem('contracts') || '');

    type OptionItem = { label: string; value: string; disabled?: boolean };

    const ActivityItems: OptionItem[] = [
        { label: 'Svi', value: 'all' },
        { label: 'Aktivni', value: 'active' },
        { label: 'Neaktivni', value: 'inactive' },
    ];

    // TODO: pagination
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
                        (contract: contractData) =>
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
                    .map((contract: contractData) => {
                        return (
                            <Contract
                                item={contract}
                                key={contract.id.toString()}
                            />
                        );
                    })}
            </div>
        </>
    );
};

export default ContractList;
