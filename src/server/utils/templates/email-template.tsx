import React from 'react';

import { renderToString } from 'react-dom/server';

interface Props {
    phone?: string;
    name?: string;
}

export function EmailTemplate({ name, phone }: Props) {
    return renderToString(
        <div>
            <h2>Вызов мастера</h2>

            <ul>
                <li>Имя: {name}</li>
                <li>
                    Телефон <a href={`tel:${phone}`}>{phone}</a>
                </li>
            </ul>
        </div>,
    );
}
