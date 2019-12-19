$(document).ready(function(){

    // 9AM
    var t0 = localStorage.getItem("9am");
    $("#nine-am").text(t0);

    // 10AM
    var t1 = localStorage.getItem("10am");
    $("#ten-am").text(t1);

    // 11AM
    var t2 = localStorage.getItem("11am");
    $("#eleven-am").text(t2);

    // 12PM
    var t3 = localStorage.getItem("12pm");
    $("#twelve-pm").text(t3);

    // 1PM
    var t4 = localStorage.getItem("1pm");
    $("#one-pm").text(t4);

    // 2PM
    var t5 = localStorage.getItem("2pm");
    $("#two-pm").text(t5);

    // 3PM
    var t6 = localStorage.getItem("3pm");
    $("#three-pm").text(t6);

    // 4PM
    var t7 = localStorage.getItem("4pm");
    $("#four-pm").text(t7);
    
    // 5PM
    var t8 = localStorage.getItem("5pm");
    $("#five-pm").text(t8);


    $(".saveBtn").on("click", function() {
        //console.log(this);
        var value = $(this).siblings(".description").val(); // This gets the VALUE of the description in jQuery
        var time = $(this).siblings(".hour").text();
        localStorage.setItem(time, value);

        $("this").siblings(".description").textContent(localStorage.value);
        

    });
    $("#currentDay").text(moment().format("llll"));

});