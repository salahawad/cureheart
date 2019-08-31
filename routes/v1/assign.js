var express = require('express');
var router = express.Router();

var interval = require('../../utils/interval');

router.post('/', async (req, res, next) => {
    const { start, end } = req.body;

    const intervals = await interval(start, end);

    const doctorTime = [];

    await intervals.map(time => {
        const element = {
            time: time,
            reserved: true,
            patientId: 123
        }

        doctorTime.push(element);
    });

    return res.json(doctorTime);
});

module.exports = router;