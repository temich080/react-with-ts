import React from 'react';
import {Button, ButtonProps} from 'antd';

const ButtonUI:React.FC<ButtonProps> = ({
    children,
    ...props
}) => {
    return (
        <Button {...props}>
            {children}
        </Button>
    );
};

export default ButtonUI;