let day = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
function daysAfter(initial, n) {
    const initialIndex = day.indexOf(initial);
    return day[(initialIndex + n) % day.length];
}