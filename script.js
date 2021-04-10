var now;
var now1;
var now2;
var task;
var savedTask=[];
var index=0;

date();
checkHour();

//Function to show the current date and hour
 function date() {
    var now1= moment().format('MMMM Do YYYY, h:mm:ss a')
    var now2= moment().format('dddd');
    let now = now1 + " " + "," + now2;
    console.log(now);
    $("#currentDay").text(now);
}

//Check the hour to set past, present and future colors
function checkHour() {
//Getting only the hour, converting the value to an integer
 var nowTime=parseInt(moment().format("hh"));
 console.log(nowTime);
 
//Comparing the actual time with all the possible time slots
  if (nowTime==9) {
      $("#task1").addClass("present");
      $("#task2").addClass("future");
      $("#task3").addClass("future");
      $("#task4").addClass("future");
      $("#task5").addClass("future");
      $("#task6").addClass("future");
      $("#task7").addClass("future");
      $("#task8").addClass("future");
      $("#task9").addClass("future");
      $("#task10").addClass("future");
  }
  else if (nowTime==10) {
      $("#task1").addClass("past");
      $("#task2").addClass("present");
      $("#task3").addClass("future");
      $("#task4").addClass("future");
      $("#task5").addClass("future");
      $("#task6").addClass("future");
      $("#task7").addClass("future");
      $("#task8").addClass("future");
      $("#task9").addClass("future");
      $("#task10").addClass("future");
}

else if (nowTime==11) {
      $("#task1").addClass("past");
      $("#task2").addClass("past");
      $("#task3").addClass("present");
      $("#task4").addClass("future");
      $("#task5").addClass("future");
      $("#task6").addClass("future");
      $("#task7").addClass("future");
      $("#task8").addClass("future");
      $("#task9").addClass("future");
      $("#task10").addClass("future");
}

else if (nowTime==12) {
    $("#task1").addClass("past");
    $("#task2").addClass("past");
    $("#task3").addClass("past");
    $("#task4").addClass("present");
    $("#task5").addClass("future");
    $("#task6").addClass("future");
    $("#task7").addClass("future");
    $("#task8").addClass("future");
    $("#task9").addClass("future");
    $("#task10").addClass("future");
}

else if (nowTime==1) {
    $("#task1").addClass("past");
    $("#task2").addClass("past");
    $("#task3").addClass("past");
    $("#task4").addClass("past");
    $("#task5").addClass("present");
    $("#task6").addClass("future");
    $("#task7").addClass("future");
    $("#task8").addClass("future");
    $("#task9").addClass("future");
    $("#task10").addClass("future");
}
else if (nowTime==2) {
    $("#task1").addClass("past");
    $("#task2").addClass("past");
    $("#task3").addClass("past");
    $("#task4").addClass("past");
    $("#task5").addClass("past");
    $("#task6").addClass("present");
    $("#task7").addClass("future");
    $("#task8").addClass("future");
    $("#task9").addClass("future");
    $("#task10").addClass("future");
}

else if (nowTime==3) {
    $("#task1").addClass("past");
    $("#task2").addClass("past");
    $("#task3").addClass("past");
    $("#task4").addClass("past");
    $("#task5").addClass("past");
    $("#task6").addClass("past");
    $("#task7").addClass("present");
    $("#task8").addClass("future");
    $("#task9").addClass("future");
    $("#task10").addClass("future");
}

else if (nowTime==4) {
    $("#task1").addClass("past");
    $("#task2").addClass("past");
    $("#task3").addClass("past");
    $("#task4").addClass("past");
    $("#task5").addClass("past");
    $("#task6").addClass("past");
    $("#task7").addClass("past");
    $("#task8").addClass("present");
    $("#task9").addClass("future");
    $("#task10").addClass("future");
}

else if (nowTime==5) {
    $("#task1").addClass("past");
    $("#task2").addClass("past");
    $("#task3").addClass("past");
    $("#task4").addClass("past");
    $("#task5").addClass("past");
    $("#task6").addClass("past");
    $("#task7").addClass("past");
    $("#task8").addClass("past");
    $("#task9").addClass("present");
    $("#task10").addClass("future");
}

else {
    $("#task1").addClass("past");
    $("#task2").addClass("past");
    $("#task3").addClass("past");
    $("#task4").addClass("past");
    $("#task5").addClass("past");
    $("#task6").addClass("past");
    $("#task7").addClass("past");
    $("#task8").addClass("past");
    $("#task9").addClass("past");
    $("#task10").addClass("present");
}
}

//When the save button is clicked, storage the new task in the local memmory
$(".saveBtn").on("click", function() {
    var savedTask= {
        task1: $("#task1").val(),
        task2: $("#task2").val(),
        task3: $("#task3").val(),
        task4: $("#task4").val(),
        task5: $("#task5").val(),
        task6: $("#task6").val(),
        task7: $("#task7").val(),
        task8: $("#task8").val(),
        task9: $("#task9").val(),
        task10: $("#task10").val(),
    }
    localStorage.setItem("tasks", JSON.stringify(savedTask));
    console.log(savedTask);
})
