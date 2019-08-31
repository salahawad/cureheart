var moment = require('moment');

const timeInverval = async (startTime, endTime) => {
    var start = moment(startTime, 'YYYY-MM-DD hh:mm a');
    var end = moment(endTime, 'YYYY-MM-DD hh:mm a');
    

    await start.minutes(Math.ceil(start.minutes() / 15) * 15);

    var result = [];

    var current = moment(start);

    while(current <= end){
        result.push(current.format('YYYY-MM-DD hh:mm a'));
        current.add(15, 'minutes');
    }

    return result;
}

module.exports = timeInverval;