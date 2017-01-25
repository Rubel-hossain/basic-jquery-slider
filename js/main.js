(function($){

 $(".slide").first().addClass("active");

 $(".slide").hide();

 $(".active").show();

 // next handle

 function nextSlide(){

        $(".active").removeClass("active").addClass("next-slide");

        if($(".next-slide").is(":last-child")){

            $(".slide").first().addClass("active");
        }else {

            $(".next-slide").next().addClass("active");
        }

        $(".next-slide").removeClass("next-slide");
        $(".slide").fadeOut();
        $(".active").fadeIn();
 }

 // previous handler

 function prevSlide(){

        $(".active").removeClass("active").addClass("next-slide");

        if($(".next-slide").is(":first-child")){

            $(".slide").last().addClass("active");
        }else {

            $(".next-slide").prev().addClass("active");
        }

        $(".next-slide").removeClass("next-slide");
        $(".slide").fadeOut(400);
        $(".active").fadeIn(450);
 }

  $("#next").on("click", nextSlide);
  $("#prev").on("click", prevSlide);

  setInterval(nextSlide,3000);


}(jQuery));
