export function formatStringDate(text: string) {
    const data = text.split('-');

    return `${data[2]}.${data[1]}.${data[0]}.`;
}
