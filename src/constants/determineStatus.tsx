export function determineStatus(status: string) {
    switch (status.toLocaleLowerCase()) {
        case 'kreirano':
            return 'created';
            break;
        case 'naručeno':
            return 'ordered';
            break;
        case 'isporučeno':
            return 'delivered';
            break;
        default:
            return 'created';
    }
}
