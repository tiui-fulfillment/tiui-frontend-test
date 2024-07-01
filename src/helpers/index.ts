export function formatDate(dateStr: string | null): string {

    if (!dateStr) return ''

    const dateObj = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    return new Intl.DateTimeFormat('es-ES', options).format(dateObj);
}