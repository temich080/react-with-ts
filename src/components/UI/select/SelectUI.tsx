import React, {ChangeEvent} from 'react';

interface ISelectUI {
    value: string;
    options: SelectOptions[];
    defaultValue: string;
    onChange: any;
}

interface SelectOptions {
    value: string;
    name: string;
}

const SelectUI:React.FC<ISelectUI> = ({
    value,
    options,
    defaultValue,
    onChange
}) => {
    return (
        <select
            onChange={(event: ChangeEvent<HTMLSelectElement>) => onChange(event.target.value)} value={value}
        >
            <option value="">{defaultValue}</option>
            {options.map(({value, name}) =>
                <option key={value} value={value}>{name}</option>)
            }
        </select>
    );
};

export default SelectUI;