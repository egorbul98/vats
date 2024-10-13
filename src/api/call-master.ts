import axios from 'axios';

export const callMaster = async ({ phone, name }: { phone: string; name: string }) => {
    return axios.post('/api/email/send', { phone, name });
};
