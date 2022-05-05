import React from 'react';
import {Input} from 'antd';

interface IInputUIProps {
    value: string;
    placeholder: string;
    onChange: any;
    onPressEnter?: any;
}

const InputUI:React.FC<IInputUIProps> = ({
    children,
    onChange,
    onPressEnter,
    ...props
}) => {
    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') onPressEnter(e);
    }

    return (
        <Input {...props} onChange={(event) => onChange(event.target.value)} onKeyDown={(e) => handleKeyDown(e)}>
            {children}
        </Input>
    );
};

export default InputUI;
