const getDayOfWeek = function (day) {
    const daysOfWeek = {
        monday: 1,
        tuesday: 2,
        wednesday: 3,
        thursday: 4,
        friday: 5,
        saturday: 6,
        sunday: 7
    };
    if (Object.keys(daysOfWeek).includes(day.toString().toLowerCase())) {
        return daysOfWeek[day.toString().toLowerCase()];
    } else {
        return `'${day}' is not a valid day!`
    }
}

module.exports = getDayOfWeek;