var now;
var now1;
var now2;
var hour;
var task;
var savedTask=[];

date();
//checkHour("9:00:00");

//Function to show the current date and hour
 function date() {
    var now1= moment().format('MMMM Do YYYY, h:mm:ss a')
    var now2= moment().format('dddd');
    let now = now1 + " " + "," + now2;
    console.log(now);
    $("#currentDay").text(now);
}

//Check the hour to set past, present and future colors
function checkHour(hour) {
    var parts = now.split(":");
    t1.setHours(parts[0],parts[1],parts[2],0);
    var t2 = hour;
    parts = time2.split(":");
    t2.setHours(parts[0],parts[1],parts[2],0);

}


//When the save button is clicked, storage the new task in the local memmory
$(".saveBtn").on("click", function(event) {
    var savedTask=localStorage.setItem(task, ".textarea");
    console.log(savedTask);
})



    
