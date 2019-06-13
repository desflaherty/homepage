$(document).ready(function () {
  $ (".nav li").on("click", function() {
                        $(".nav li").removeClass("active");
                        $(this).addClass("active");
                    });

                    //https://v4-alpha.getbootstrap.com/components/scrollspy/#mdo.
                    //Scroll spy used to update navbar links on scroll so they will be on the relevant section

                    $('body').scrollspy({ target: '#navbar' });
});
 