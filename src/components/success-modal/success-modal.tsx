import React, { useEffect, useState } from 'react';
import { Modal } from '../modal/modal';

interface Props {
    open: boolean;
    onClose: () => void;
}

export const SuccessModal = ({ open: _open, onClose: _onClose }: Props) => {
    const [open, setOpen] = useState(_open);

    useEffect(() => {
        setOpen(_open);
    }, [_open]);

    const onClose = () => {
        setOpen(false);
        _onClose();
    };

    return (
        <>
            <Modal
                title="Спасибо за обращение!"
                description={'Наши специалисты свяжутся с вами в ближайшее время'}
                open={open}
                onClose={onClose}
            ></Modal>
        </>
    );
};
