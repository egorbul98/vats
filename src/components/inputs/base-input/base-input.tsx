import React from 'react';
import styles from './base-input.module.scss';

export interface BaseInputProps {
    placeholder?: string;
    value?: any;
    onChange?: (value: any) => any;
    type?: React.HTMLInputTypeAttribute;
    maxLength?: number;
    ref?: any;
}

export const BaseInput = ({
    placeholder,
    onChange: _onChange,
    value,
    type = 'text',
    ref,
    maxLength = 128,
}: BaseInputProps) => {
    const onChange = (e: any) => {
        _onChange?.(e.target.value);
    };
    return (
        <label className={styles.input}>
            <input {...{ placeholder, value, onChange, type, ref, maxLength }} />
        </label>
    );
};
