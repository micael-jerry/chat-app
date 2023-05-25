export const formaterDate = (dateStr: string): string => {
    const date = new Date(dateStr);

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    return date.toLocaleString('en-US', options);
}