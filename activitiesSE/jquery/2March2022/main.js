$( "#foo" ).on( "click", function() { 
    console.log($( this ).text());
});

$('#hello').on('click', function(){ 
    console.log('hello world!'); 
    $(this).off();
});

$('#hello').on('mouseenter', function(){ 
    console.log('you are about to click');
});

$(function() {
    $('.delete').on('click', function() {
    var $btn = $(this);
    var $itemWrap = $btn.closest('.item-wrapper');
    var person = $itemWrap.find('.person').text();
    $.post('url/string', { id: $itemWrap.data('item_id')}).done(function(response) {
    $itemWrap.remove() }).fail(function() {
        alert('Ooops, not deleted at server');
    });
});
});

$('p').hasClass('small-paragraph');
$('p').hasClass('large-paragraph'); 

$(".anna").next().css("color", "green");
$(".anna").prev().css("color", "blue");

$(".filter").filter(":even").css("color", "purple");
$(".filter").filter(".one").css("font-weight", "bold"); 

$('.parent').find('.children[name="second"] ul li').css('font-weight','bold');

$(".red").each(function(key, ele){ 
    var text = $(ele).text(); 
    console.log(text);
});

$(".menu").on("click", "li", function () { 
    $(this).addClass("selected"); 
    $(this).siblings().removeClass("selected");
});

var firstParagraph = $("div p").first(); 
console.log("First paragraph:", firstParagraph.text());

$("#btn-1").click(function(){ 
    $("p").append(" <b>Book</b>.");
}); 
$("#btn-2").click(function(){
    $("ul").append("<li>Appended list item</li>");
 });

 $('#parent').prepend($('#child'));

 $('#ajax_form').submit(function(event){ event.preventDefault();
    var $form = $(this);
      $.ajax({
            type: 'POST',
            url: $form.attr('action'), 
            data: $form.serialize(), 
            success: function(data) {
                console.log("SUCCESS")
        },
    error: function(error) {
            console.log("ERROR!!!");
    } });
    });

$("input").change(function() {
        $('input[name=\''+this.id+'\']').not(this).prop('checked', this.checked);
        $('#'+this.name).prop('checked', $('input[name=\''+this.name+'\']').length ===
  $('input[name=\''+this.name+'\']').filter(':checked').length);
  });