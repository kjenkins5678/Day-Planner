var dayOfWeek = moment().day();
var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

var month = moment().month();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var day = moment().date();

var dayAndDateDiv = $("<div>");
dayAndDateDiv.text(daysOfTheWeek[dayOfWeek]+", "+months[month] + " " + day)

$(".jumbotron").append(dayAndDateDiv);

var row = $("<div class=row>");
$(".hours").append(row);