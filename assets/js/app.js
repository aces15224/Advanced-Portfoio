$(".nav-link").on("click", function(event){
    event.preventDefault();
    const page = $(this).attr("href")
    window.history.pushState(null, null, page)
    // window.history.pushState(null,null, window.location.pathname + page)

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