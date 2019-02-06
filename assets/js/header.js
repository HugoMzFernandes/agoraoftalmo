"use strict";

var APP = APP || {};

APP.MobileMenu = (function($){
  var obj = {};

  obj.Attach = function(){

    obj.$btnToggle.on('click touch', function(e){
        $(this).parent().toggleClass('-active');

        $(this).find('.fas').toggleClass('fa-chevron-down fa-chevron-up');

        e.preventDefault();
        return false;
    });

    obj.$btnMenu.on('click', function(e){
        obj.$container.trigger(':toggle');
        e.preventDefault();
        return false;
    });

    obj.$overlay.on('click', function(e){
        obj.$container.trigger(':toggle');
        e.preventDefault();
        return false;
    });

    obj.$container.on(':toggle', function(e){
        obj.$container.toggleClass('-active');
        obj.$btnMenu.toggleClass('-active');
        obj.$btnMenu.find('.fas').toggleClass('fa-bars fa-times');
    });
  };

  obj.Init = function(){
    obj.$container = $('#header .mobile .mobile-menu');
    obj.$btnToggle = obj.$container.find("button");
    obj.$btnMenu = $('.custom-navbar-toggle');
    obj.$overlay = $('.overlay-mobile-menu')

    obj.Attach();
  };

  return obj;

})(jQuery || $).Init();