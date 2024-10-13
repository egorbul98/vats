import React from 'react';
import { BaseInput, BaseInputProps } from '../base-input/base-input';

type Props = BaseInputProps;

export const TextInput = ({ ...props }: Props) => {
    return <BaseInput {...props} />;
};
