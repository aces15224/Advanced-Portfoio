$(".nav-link").on("click", function(event){
    event.preventDefault();
    const page = $(this).attr("href")
    window.history.pushState(null, null, page)

    $.ajax({
        url:page,
        success:function(data){
            $("section").fadeOut(250, function(){
                const nextPage = $(data).filter("section").html();
                $("section").html(nextPage);
                $("section").fadeIn(250);
            })
        }
    })
})
var clicked = false;
$(".flip-card").on("click", function(){ 
    var $this = $(this).parent()   
    $(this).children(".flip-card-inner").toggleClass("flip-class")
    
    clicked = !clicked;
    if (clicked) {
        setTimeout(function(){ 
            $this.addClass("back")}, 1000);
        }
    else{
        $this.removeClass("back")
    }
})



$('.popover-dismiss').popover({
    trigger: 'hover'
  })