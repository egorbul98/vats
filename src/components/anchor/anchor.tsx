import React from 'react';
import styles from './anchor.module.scss';
import cn from 'classnames';

interface Props {
    id: string;
    offset?: boolean;
}

export const Anchor: React.FC<Props> = ({ id, offset = true }: Props) => {
    return <a id={id} className={cn(styles.anchor, { [styles.offset]: offset })} />;
};
