const mongoose = require('mongoose');
const Note = require("../models/Note");
const User = require("../models/User");
const cron = require('node-cron');


function startCronSchedule() {
    console.log("Task Scheduled. DB wil be cleared at 12:00 AM IST");
    cron.schedule('0 0 * * *', async () => {
        try {
            console.log("Trying to clear the DB at 12:00 AM IST");
            await Note.deleteMany({});
            await User.deleteMany({});
            console.log('Cleared users and notes collections at 12:00 AM IST');
        } catch (err) {
            console.error('Error the DB at 12:00 AM IST:', err);
        }
    }, {
        scheduled: true,
        timezone: "Asia/Kolkata"
    });
}

module.exports.startCronSchedule = startCronSchedule;