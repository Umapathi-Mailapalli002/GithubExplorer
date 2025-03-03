export function formatUpdatedTime(text, isoString) {
    const date = new Date(isoString);
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return `${text} ${formattedDate}`;
}