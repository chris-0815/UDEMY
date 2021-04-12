$(function() {
    console.log("The DOM is now loaded and can be manipulated.")

    $(".menu__hamburger--toggle").on("click", function() {
    
        if($(".menu__item").hasClass("active")){
            $(".menu__item").removeClass("active")
        }
        else {
            $(".menu__item").hasClass("active")
            $(".menu__item").addClass("active")
        }
    });

    $(".menu__item").on("click", function() {
    
        if($(".menu2__item2").hasClass("active")){
            $(".menu2__item2").removeClass("active")
        }
        else {
            $(".menu2__item2").hasClass("active")
            $(".menu2__item2").addClass("active")
        }
    });
});