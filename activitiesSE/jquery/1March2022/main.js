$(document).ready(function() {
    $('#hello').text("Hello World!");
});

$("li").each(function(index) {
    console.log(index + ": " + $(this).text());
})

$(function() { 
    console.log("inside handler");
});
console.log("outside handler");

$('#hello').on('click', function(){ 
    console.log('hello world!'); 
    $(this).off();
});
