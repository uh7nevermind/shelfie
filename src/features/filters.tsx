export function filterByStatus(items, status) {
    return items.filter(item => item.status === status);
}