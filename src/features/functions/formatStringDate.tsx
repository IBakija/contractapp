export function formatStringDate(text: string) {
    try {
        const data = text.split('-');
        return `${data[2]}.${data[1]}.${data[0]}.`;
    } catch {
        return text;
    }
}
