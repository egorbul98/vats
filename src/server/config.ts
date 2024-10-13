import dotenv from 'dotenv';
dotenv.config();

import { cleanEnv, email, str, num } from 'envalid';

export const env = cleanEnv(process.env, {
    EMAIL_CONFIG_HOST: str({ default: '' }),
    EMAIL_CONFIG_PORT: num({ default: 465 }),
    EMAIL_FROM_USER: email({ default: 'otremontirovich@mail.ru' }),
    EMAIL_FROM_PASS: str({ default: '' }),
    EMAIL_FROM_APP_PASS: str({ default: '' }),
    EMAIL_TO: str({ default: '' }),
    PORT: str({ default: '3000' }),
});
