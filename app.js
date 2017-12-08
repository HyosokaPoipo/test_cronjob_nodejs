var CronJob = require('cron').CronJob;

new CronJob('* * * * * *', function() {
  console.log('You will see this message every second');
}, null, true, 'Asia/Jakarta');

/**********************************************************/
var job = new CronJob('00 30 11 * * 1-5', function() {
  /*
   * Runs every weekday (Monday through Friday)
   * at 11:30:00 AM. It does not run on Saturday
   * or Sunday.
   */

   console.log("run on weekday ajjah");
  }, function () {
    /* This function is executed when the job stops */
  },
  true, /* Start the job right now */
  'Asia/Jakarta' /* Time zone of this job. */
);
////////////////////////////////////////////////////////////////




new CronJob('00 00 00 * * 1-5', function() {
  /*
   * Runs every weekday (Monday through Friday)
   * at 00:00:00 AM. It does not run on Saturday
   * or Sunday.
   */

   console.log("run on weekday ajjah pukul 00.00");
  }, function () {
    /* This function is executed when the job stops */
  },
  true, /* Start the job right now */
  'Asia/Jakarta' /* Time zone of this job. */
);


// new CronJob('* * * * * *', function() {
//   console.log('xxxxxxxxxxxxxxxxx');
// }, null, true, 'Asia/Jakarta');
