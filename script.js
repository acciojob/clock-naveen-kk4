//your JS code here. If required.
const element = document.getElementById("timer");
function date_time() 
{
 var dt = new Date();
document.getElementById('timer').innerHTML = dt.toLocaleString().toLocaleUpperCase();
setTimeout(function () { date_time(); }, 500);
}
date_time();
