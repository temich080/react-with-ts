import React from 'react';

const Input = ({value, placeholder, onChange}: {value: string, placeholder: string, onChange: any}) => {
    return (
        <input type="text" value={value} placeholder={placeholder} onChange={onChange}/>
    );
};

export default Input;