export function determineStatus(status: string) {
    switch (status.toLocaleLowerCase()) {
        case 'kreirano':
            return 'created';
        case 'naručeno':
            return 'ordered';
        case 'isporučeno':
            return 'delivered';
        default:
            return 'created';
    }
}
