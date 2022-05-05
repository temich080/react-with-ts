import React from 'react';
import s from './modal.module.css';
import cn from 'classnames';

const Modal = ({children, isOpen, setIsOpen}: {children: any, isOpen: any, setIsOpen: any}) => {
    const close = () => {
        setIsOpen(false)
    }

    const clickModal = (e: any) => {
        e.stopPropagation();
    }

    return (
        <div className={cn(s.root, {[s.active]: isOpen})} onClick={close}>
            <div className={s.modal} onClick={clickModal}>
                {children}
            </div>
        </div>
    );
};

export default Modal;