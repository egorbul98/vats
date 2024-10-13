import nodemailer from 'nodemailer';
import { MASTER_EMAIL } from '../../components/feedback-form/constants';
import { env } from '../config';
import { EmailTemplate } from './templates/email-template';

export async function sendEmail({ name, phone }: { phone?: string; name?: string }) {
    const transporter = nodemailer.createTransport(
        {
            // @ts-ignore
            pool: true,
            host: env.EMAIL_CONFIG_HOST,
            port: env.EMAIL_CONFIG_PORT,
            secure: true, // true for 465, false for other ports
            auth: {
                user: env.EMAIL_FROM_USER,
                pass: env.EMAIL_FROM_APP_PASS,
            },
        },
        {
            to: [MASTER_EMAIL],
            from: `Сервисный Центр <${env.EMAIL_FROM_USER}>`,
        },
    );

    const info = await transporter.sendMail({
        subject: 'Заказы',
        html: EmailTemplate({ name, phone }),
    });

    console.log('Message sent: %s', info);
}
