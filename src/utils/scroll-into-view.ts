export function scrollIntoView(id: string) {
    window.document.querySelector(id)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}
