var slideIndex;

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
$("img.img-thumbnail").on("click", function(){
    var $thisPic = $(this).attr("data-slide-to")
    slideIndex = $thisPic;
    if($thisPic === slideIndex){
        console.log($thisPic)
        console.log(slideIndex)
        // sliderInfo(slideIndex)
    }
    // else{
    //     console.log($thisPic)
    //     console.log(slideIndex)

    // }
    
})
$('.carousel').on('slide.bs.carousel', function (slideIndex) {
    // var id = ev.relatedTarget.id;
    // var id = $(this).attr("id")
    console.log(slideIndex.to)
    slideIndex.to=slideIndex
        console.log(slideIndex.to)
        console.log(slideIndex)
   

    // var id = $(this).find("img")
    // slideIndex ++
    // if(slideIndex==6){
    //     slideIndex=0;
    // }
    // console.log(id)
  })

var clicked = false;
$(".flip-card").on("click", function(){ 
    var $this = $(this).parent()   
    $(this).children(".flip-card-inner").toggleClass("flip-class")
    clicked = !clicked;
    console.log(clicked)
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