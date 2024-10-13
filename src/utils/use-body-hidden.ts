import { useEffect } from 'react';

export function useBodyHidden(open: boolean) {
    useEffect(() => {
        if (open) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'visible';
        }
    }, [open]);
}
