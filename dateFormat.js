
// This library takes two arguments inputDate in (ISO format), requiredDateFormat and it will return inputDate in desired format

/*
Supported date format :

MM/DD/YYYY : 06/13/2019
DD/MM/YYYY : 13/06/2019
YYYY/MM/DD : 2019/06/13

M/D/YYYY : 6/13/2019
D/M/YYYY : 13/6/2019
YYYY/M/D : 2019/6/13

MM-DD-YYYY : 06-13-2019
DD-MM-YYYY : 13-06-2019
YYYY-MM-DD : 2019-06-13

M-D-YYYY : 6-13-2019
D-M-YYYY : 13-6-2019
YYYY-M-D : 2019-6-13

MM.DD.YYYY : 06.13.2019
DD.MM.YYYY : 13.06.2019
YYYY.MM.DD : 2019.06.13

M.D.YYYY : 6.13.2019
D.M.YYYY : 13.6.2019
YYYY.M.D : 2019.6.13

MMMM DDth YYYY : June 13th, 2019
DDth MMMM YYYY : 13th June, 2019
YYYY MMMM DDth : 2019 June, 13th

MMMM DD YYYY : June 13, 2019
DD MMMM YYYY : 13 June, 2019
YYYY MMMM DD : 2019 June, 13

// Get first three characters of month name
MM DDth YYYY : Jun 13th, 2019
DDth MM YYYY : 13th Jun, 2019
YYYY MM DDth : 2019 Jun, 13th

MM DD YYYY : Jun 13, 2019
DD MM YYYY : 13 Jun, 2019
YYYY MM DD : 2019 Jun, 13
*/

function formatDate(userInputDate, format) {
    let date = new Date(userInputDate);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    format = format.trim();

    switch (format) {
        case 'MM/DD/YYYY':
            day = appendZero(month, day).day;
            month = appendZero(month, day).month;
            return `${month}/${day}/${year}`;
        case 'DD/MM/YYYY':
            day = appendZero(month, day).day;
            month = appendZero(month, day).month;
            return `${day}/${month}/${year}`;
        case 'YYYY/MM/DD':
            day = appendZero(month, day).day;
            month = appendZero(month, day).month;
            return `${year}/${month}/${day}`;
        case 'M/D/YYYY':
            return `${month}/${day}/${year}`;
        case 'D/M/YYYY':
            return `${day}/${month}/${year}`;
        case 'YYYY/M/D':
            return `${year}/${month}/${day}`;
        case 'MMMM DDth YYYY':
            day = checkDay(day);
            return `${getMonthName(month)} ${day}, ${year}`;
        case 'DDth MMMM YYYY':
            day = checkDay(day);
            return `${day} ${getMonthName(month)}, ${year}`;
        case 'YYYY MMMM DDth':
            day = checkDay(day);
            return `${year} ${getMonthName(month)}, ${day}`;
        case 'MMMM DD YYYY':
            return `${getMonthName(month)} ${day}, ${year}`;
        case 'DD MMMM YYYY':
            return `${day} ${getMonthName(month)}, ${year}`;
        case 'YYYY MMMM DD':
            return `${year} ${getMonthName(month)}, ${day}`;
        case 'MM DDth YYYY':
            day = checkDay(day);
            return `${getMonthName(month).slice(0, 3)} ${day}, ${year}`;
        case 'DDth MM YYYY':
            day = checkDay(day);
            return `${day} ${getMonthName(month).slice(0, 3)}, ${year}`;
        case 'YYYY MM DDth':
            day = checkDay(day);
            return `${year} ${getMonthName(month).slice(0, 3)}, ${day}`;
        case 'MM DD YYYY':
            return `${getMonthName(month).slice(0, 3)} ${day}, ${year}`;
        case 'DD MM YYYY':
            return `${day} ${getMonthName(month).slice(0, 3)}, ${year}`;
        case 'YYYY MM DD':
            return `${year} ${getMonthName(month).slice(0, 3)}, ${day}`;
        case 'MM-DD-YYYY':
            day = appendZero(month, day).day;
            month = appendZero(month, day).month;
            return `${month}-${day}-${year}`;
        case 'DD-MM-YYYY':
            day = appendZero(month, day).day;
            month = appendZero(month, day).month;
            return `${day}-${month}-${year}`;
        case 'YYYY-MM-DD':
            day = appendZero(month, day).day;
            month = appendZero(month, day).month;
            return `${year}-${month}-${day}`;
        case 'M-D-YYYY':
            return `${month}-${day}-${year}`;
        case 'D-M-YYYY':
            return `${day}-${month}-${year}`;
        case 'YYYY-M-D':
            return `${year}-${month}-${day}`;
        case 'MM.DD.YYYY':
            day = appendZero(month, day).day;
            month = appendZero(month, day).month;
            return `${month}.${day}.${year}`;
        case 'DD.MM.YYYY':
            day = appendZero(month, day).day;
            month = appendZero(month, day).month;
            return `${day}.${month}.${year}`;
        case 'YYYY.MM.DD':
            day = appendZero(month, day).day;
            month = appendZero(month, day).month;
            return `${year}.${month}.${day}`;
        case 'M.D.YYYY':
            return `${month}.${day}.${year}`;
        case 'D.M.YYYY':
            return `${day}.${month}.${year}`;
        case 'YYYY.M.D':
            return `${year}.${month}.${day}`;
        default:
            day = appendZero(month, day).day;
            month = appendZero(month, day).month;
            return `${month}/${day}/${year}`;
    };
};

function appendZero(month, day) {
    month = month >= 10 ? month : `0${month}`;
    day = day >= 10 ? day : `0${day}`;
    return { month, day };
};

function getMonthName(month) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthNames[month - 1];
};

function checkDay(day) {
    if (day === 1 || day === 21 || day === 31) {
        return `${day}st`;
    }
    if (day === 2 || day === 22) {
        return `${day}nd`;
    }
    if (day === 3 || day === 23) {
        return `${day}rd`;
    } else {
        return `${day}th`;
    }
};

console.log(formatDate('onwerwdsasadasdasd June 13 2019 13:51:58 GMT+0530 (India Standard Time)', 'DDth MM YYYY'));
