$(document).ready(function () {
​
    /////////////////// FUNKTIONEN ///////////////////
​
    // Check Size of Window
    function checkWidth() {
        var windowsize = $(window).width();
        return windowsize
    }
​
    function hideSearchBar() {
        $('.searchbar').hide();
    }
​
    //Close NAVi
    function closeNavi() {
        
        $('.main-navigation__nav-link--active').removeClass('main-navigation__nav-link--active');
        $('.main-navigation__nav-point--active').removeClass('main-navigation__nav-point--active');
        if (checkWidth() < 900) {
            $('.hamburger').removeClass("is-active")
            $('.main-navigation').removeClass("main-navigation--active");
            
            $('body').removeClass('lock-body')
        }
        $('.main-navigation-overlay').hide();
        
​
​
        $('.navbar-mobile__container').removeClass("navbar-mobile__container--active");
        $('.navbar-mobile__hamburger').removeClass('is-active');
        $('.navbar-mobile__icon--hamburger').removeClass("navbar-mobile__icon--hamburger-active")
        $('.overlay').hide();
    }
     //ENDE CLOSE NAVI
​
    /////////////////// ///////////////////
​
​
    //////// WENN AUF OOVERLAY CLICK //////
    $('.main-navigation-overlay').click(() => { 
        $('.main-navigation__nav-link--active').removeClass('main-navigation__nav-link--active')
        $('.main-navigation__nav-point--active').closest('.main-navigation__nav-point').removeClass('main-navigation__nav-point--active')
        $('.main-navigation-overlay').hide()
    })
​
​
​
    // Mobile navi
    $('.hamburger').click(() => {
        $(this).toggleClass("is-active")
        $('.main-navigation').toggleClass("main-navigation--active");
​
        $('.searchbar').hide();
        $('.language-bar').hide();
​
        $('.main-navigation-overlay').toggle()
        $('body').toggleClass('lock-body')
​
    });
​
​
​
    //Show Subnavi
    $('.main-navigation__nav-link--has-subnavi').click(function (a) {
        a.preventDefault();
        hideSearchBar()
        $('.language-bar').hide();
        if ($(this).hasClass('main-navigation__nav-link--active')) {
            $(this).removeClass('main-navigation__nav-link--active')
            $(this).closest('.main-navigation__nav-point').removeClass('main-navigation__nav-point--active')
            if (checkWidth() > 900) {
            $('.main-navigation-overlay').hide()
            }
​
        } else {
            if (checkWidth() > 900) {
                $('.main-navigation__nav-link--active').removeClass('main-navigation__nav-link--active');
                $('.main-navigation__nav-point--active').removeClass('main-navigation__nav-point--active');
                $('.main-navigation-overlay').show()
            }
​
            $(this).addClass('main-navigation__nav-link--active')
            $(this).closest('.main-navigation__nav-point').addClass('main-navigation__nav-point--active')
            
​
        }
    })
​
​
​
​
​
​
​
​
    $('.searchbar').hide();
    /////////////////////////////////START  Search Bar /////////////////////////////////
    $('.main-header__search-button').click(() => {
​
        if (checkWidth() > 900) {
            closeNavi()
         }
        
         
   
        $('.searchbar').slideToggle('fast', function() {
            $('.searchbar__input').focus()
        });
        
        $('.language-bar').hide();
    })
​
    // Mobile Searchbar
​
    // Searchbar Start
​
    // Show searchbar
    
​
​
​
    //Close
    $('.searchbar__close').click(() => {
        $('.searchbar').slideUp(('fast'));
    });
​
​
    /////////////////////////////////ENDE  Language Bar /////////////////////////////////
​
​
        /////////////////////////////////START  Language Bar /////////////////////////////////
        $('.main-header__language-button').click(() => {
            if (checkWidth() > 900) {
                closeNavi()
             }
            $('.searchbar').hide();
            $('.language-bar').slideToggle('fast');
            console.log("lol")
        })
    
       //Close
        $('.language-bar__close').click(() => {
            $('.language-bar').slideUp(('fast'));
        });
        
​
​
    
    
    
        /////////////////////////////////ENDE  Search Bar /////////////////////////////////
​
​
})