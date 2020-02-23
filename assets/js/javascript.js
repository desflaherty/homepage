$(document).ready(function () {
  $ (".nav li").on("click", function() {
                        $(".nav li").removeClass("active");
                        $(this).addClass("active");
                    });

                    //https://v4-alpha.getbootstrap.com/components/scrollspy/#mdo.
                    //Scroll spy used to update navbar links on scroll so they will be on the relevant section

                    $('body').scrollspy({ target: '#navbar' });
                    
                    
                    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 250) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });


                    
});
 
