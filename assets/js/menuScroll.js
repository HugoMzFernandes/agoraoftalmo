"use strict";

var APP = APP || {};

APP.menuScroll = (function($){
    var obj = {};

    obj.Scroll = function (){
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll >= 50) {
                $("#header").addClass('scrolled');
            } else {
                $("#header").removeClass('scrolled');
            }
        })
    };

    obj.Attach = function() {
        obj.Scroll();
    };

    obj.Init = function() {
        obj.Attach();
    };

    return obj;


}) ($ || jQuery).Init();