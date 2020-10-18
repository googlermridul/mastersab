$(document).ready(function() {

   $("#pricingSection .btn-box .monthly").click(function() {
      $(this).addClass("active");
      $(".yearly").removeClass("active");
   });
   $("#pricingSection .btn-box .yearly").click(function() {
      $(this).addClass("active");
      $(".monthly").removeClass("active");
      $("#pricingSection .year").show();
   });

   /*~~~~~~~~~~~~~~~~~~~~ START NAVIGRATION CUSTOM CODE ~~~~~~~~~~~~~~~~~~~~*/
   $(window).scroll(function() {
      var st = $(this).scrollTop();
      if( st > 10 ) {
         $("#navigration").css({
            background: "#72b625"
         });
      } else {
         $("#navigration").css({
            background: "none"
         });
      }
   });

   $(".hamburger").click(function() {
      $(".navbar-nav").addClass("active");
   });
   $(".hamburger-close").click(function() {
      $(".navbar-nav").removeClass("active");
   });
   /*~~~~~~~~~~~~~~~~~~~~ START NAVIGRATION CUSTOM CODE ~~~~~~~~~~~~~~~~~~~~*/


   /*~~~~~~~~~~~~~~~~~~~~ START SIDE LOGIN/SIGNUP CUSTOM CODE ~~~~~~~~~~~~~~~~~~~~*/
   $(".login-reg").click(function() {
      $(".side-login").addClass("active-login");
   });
   $(".close-icon").click(function() {
      $(".side-login").removeClass("active-login");
      $(".side-signup").removeClass("active-signup");
   });

   $(".call-side-signup").click(function() {
      $(".side-signup").addClass("active-signup");
      $(".side-login").removeClass("active-login");
   });

   $(".call-side-login").click(function() {
      $(".side-login").addClass("active-login");
      $(".side-signup").removeClass("active-signup");
   });
   /*~~~~~~~~~~~~~~~~~~~~ END SIDE LOGIN/SIGNUP CUSTOM CODE ~~~~~~~~~~~~~~~~~~~~*/


   /*~~~~~~~~~~~~~~~~~~~~ START CATEGORY SECTION SELECT BUTTON CUSTOM CODE ~~~~~~~~~~~~~~~~~~~~*/
   $(".select-btn > .btn").click(function() {
      $(".select-btn > .btn").removeClass("active-btn");
      $(this).addClass("active-btn");
   });
   /*~~~~~~~~~~~~~~~~~~~~ END CATEGORY SECTION SELECT BUTTON CUSTOM CODE ~~~~~~~~~~~~~~~~~~~~*/


   /*~~~~~~~~~~~~~~~~~~~~ START DASHBOARD PAGE CUSTOM CODE ~~~~~~~~~~~~~~~~~~~~*/
   $(".left-side ul > li").click(function() {
      $(".left-side ul > li").removeClass("active");
      $(this).addClass("active");
   });
   /*~~~~~~~~~~~~~~~~~~~~ START DASHBOARD PAGE CUSTOM CODE ~~~~~~~~~~~~~~~~~~~~*/


   /*~~~~~~~~~~~~~~~~~~~~ START HOME SECTION CAROUSEL PLUGIN ~~~~~~~~~~~~~~~~~~~~*/
   $('#homeSection .owl-carousel').owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      autoplay: true,
      responsive: {
         0: {
            items:1
         }
      }
   });
   /*~~~~~~~~~~~~~~~~~~~~ END HOME SECTION CAROUSEL PLUGIN ~~~~~~~~~~~~~~~~~~~~*/


   /*~~~~~~~~~~~~~~~~~~~~ START TESTIMONIAL SECTION CAROUSEL PLUGIN ~~~~~~~~~~~~~~~~~~~~*/
   $('#testimonialSection .owl-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      autoplay: false,
      responsive: {
         0: {
            items:1
         },
         768: {
            items:2
         },
         992: {
            items:3
         }
      }
   });
   /*~~~~~~~~~~~~~~~~~~~~ END TESTIMONIAL SECTION CAROUSEL PLUGIN ~~~~~~~~~~~~~~~~~~~~*/

   /*~~~~~~~~~~~~~~~~~~~~ START INSTRUCTOR SECTION CAROUSEL PLUGIN ~~~~~~~~~~~~~~~~~~~~*/
   $('#instructorSection .owl-carousel').owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      autoplay: true,
      responsive: {
         0: {
            items:2
         },
         768: {
            items:3
         },
         992: {
            items:4
         }
      }
   });
   /*~~~~~~~~~~~~~~~~~~~~ END INSTRUCTOR SECTION CAROUSEL PLUGIN ~~~~~~~~~~~~~~~~~~~~*/


   /*~~~~~~~~~~~~~~~~~~~~ START VIDEO SECTION MAGNIFIC POPUP PLUGIN ~~~~~~~~~~~~~~~~~~~~*/
   $(".pop-video").magnificPopup({
      type: "iframe"
   });
   /*~~~~~~~~~~~~~~~~~~~~ END VIDEO SECTION MAGNIFIC POPUP PLUGIN ~~~~~~~~~~~~~~~~~~~~*/


   /*~~~~~~~~~~~~~~~~~~~~ START SCROLL UP ICON CUSTOM CODE ~~~~~~~~~~~~~~~~~~~~*/
   $(".scroll-up").fadeOut();
   $(window).scroll(function() {
      if ( $(this).scrollTop()>100 ) {
         $(".scroll-up").fadeIn();
      } else {
         $(".scroll-up").fadeOut();
      };
   });

   $(".scroll-up").click(function() {
      $("html").animate({scrollTop: 0}, 1000);
      return false;
   });
   /*~~~~~~~~~~~~~~~~~~~~ END SCROLL UP ICON CUSTOM CODE ~~~~~~~~~~~~~~~~~~~~*/


   /*~~~~~~~~~~~~~~~~~~~~ START WINDOW LOAD ANIMATION CUSTOM CODE ~~~~~~~~~~~~~~~~~~~~*/
   $(window).on("load",function() {
      $(".loader-bg").fadeOut(3000);
      $(".loader").fadeOut(2000);
   });
   /*~~~~~~~~~~~~~~~~~~~~ END WINDOW LOAD ANIMATION CUSTOM CODE ~~~~~~~~~~~~~~~~~~~~*/


   /*~~~~~~~~~~~~~~~~~~~~ START AOS SCROLL ANIAMATION PLUGIN ~~~~~~~~~~~~~~~~~~~~*/
   AOS.init({
     duration: 1200,
     offset: "50px"
   })
   /*~~~~~~~~~~~~~~~~~~~~ START AOS SCROLL ANIAMATION PLUGIN ~~~~~~~~~~~~~~~~~~~~*/


})
