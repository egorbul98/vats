import React from 'react';
import { BaseInput, BaseInputProps } from '../base-input/base-input';
import { IMask } from 'react-imask';

type Props = BaseInputProps;

const masked = IMask.createMask({
    mask: '+7 (000) 000-00-00',
});

export const PhoneInput = ({ placeholder = '+7 000 000-00-00', type = 'tel', onChange, ...props }: Props) => {
    const handleChange = (value: string) => {
        const maskedValue = masked.resolve(value);
        onChange?.(maskedValue);
    };
    return <BaseInput placeholder={placeholder} type={type} onChange={handleChange} {...props} />;
};
