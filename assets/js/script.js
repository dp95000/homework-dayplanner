$(document).ready(function(){
    $(".saveBtn").on("click", function() {
        console.log(this);
        var value = $(this).siblings(".description").val(); // This gets the VALUE of the description in jQuery
        var time = $(this).siblings(".hour").text();

       
        localStorage.setItem(time, value);
    });
    $("#currentDay").text(moment().format("llll"));

});