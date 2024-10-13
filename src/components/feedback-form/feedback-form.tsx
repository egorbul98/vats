import React, { useEffect, useState } from 'react';
import styles from './feedback-form.module.scss';
import { TextInput } from '../inputs/text-input/text-input';
import { Button } from '../button/button';
import { PhoneInput } from '../inputs/phone-input/phone-input';
import { FEEDBACK_FORM_CONSENT } from './constants';

interface Props {
    onSubmit: (data?: { name: string; phone: string }) => void;
}

export const FeedbackForm = ({ onSubmit: _onSubmit }: Props) => {
    const { name, phone, onChangeName, onChangePhone, errorsComponent, onSubmit } = useFeedbackFormInputs({
        onSubmit: _onSubmit,
    });

    return (
        <>
            <div className={styles.field}>
                <TextInput placeholder="Ваше имя" value={name} onChange={onChangeName} maxLength={64} />
            </div>
            <div className={styles.field}>
                <PhoneInput placeholder="Ваш телефон" value={phone} onChange={onChangePhone} />
            </div>
            <div className={styles.field}>
                <Button onClick={onSubmit} fullWidth>
                    Отправить
                </Button>

                <div className={styles.consent}>{FEEDBACK_FORM_CONSENT}</div>
            </div>
            {errorsComponent}
        </>
    );
};

export const useFeedbackFormInputs = ({ onSubmit: _onSubmit }: Props) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState<Record<string, string | undefined>>({});

    const hasErrors = Object.values(errors).some((error) => error);

    const [showErrors, setShowErrors] = useState(false);

    useEffect(() => {
        if (!hasErrors) {
            setShowErrors(false);
        }
    }, [hasErrors]);

    useEffect(() => {
        validatePhone(phone);
        validateName(name);
    }, [phone, name]);

    const validatePhone = (value: string) => {
        if (value.length < 18) {
            setErrors((prev) => ({
                ...prev,
                phone: value.length === 0 ? 'Введите номер телефона' : 'Некорректный номер телефона',
            }));
        } else {
            setErrors((prev) => ({ ...prev, phone: undefined }));
        }
    };

    const validateName = (value: string) => {
        if (value.length === 0) {
            setErrors((prev) => ({ ...prev, name: 'Введите имя' }));
        } else {
            setErrors((prev) => ({ ...prev, name: undefined }));
        }
    };

    const onChangePhone = (value: string) => {
        validatePhone(value);
        setPhone(value);
    };

    const onChangeName = (value: string) => {
        validateName(value);
        setName(value);
    };

    const onSubmit = () => {
        if (!hasErrors) {
            _onSubmit?.({ name, phone });
            onReset();
        } else {
            setShowErrors(true);
        }
    };

    const onReset = () => {
        setPhone('');
        setName('');
    };

    const errorsComponent = showErrors && (
        <div className={styles.errors}>
            {Object.values(errors).map((error) => {
                return <div key={error}>{error}</div>;
            })}
        </div>
    );

    return {
        phone,
        name,
        onChangePhone,
        onChangeName,
        errors,
        showErrors,
        setShowErrors,
        hasErrors,
        errorsComponent,
        onSubmit,
    };
};
