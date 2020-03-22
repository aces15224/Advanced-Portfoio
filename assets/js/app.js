$(".nav-link").on("click", function(event){
    event.preventDefault();
    const page = $(this).attr("href")
    window.history.pushState(null, null, page)
    // window.history.pushState(null,null, window.location.pathname + page)

    console.log(window.location)
})