"use strict";angular.module("talkerApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/terms.html",controller:"TermsCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("talkerApp").controller("TermsCtrl",["$scope","$resource",function(a,b){a.speachSupported=!1,a.voice="",a.rate=1,window.speechSynthesis?(a.speachSupported=!0,window.speechSynthesis.onvoiceschanged=function(){a.$apply(function(){a.voices=window.speechSynthesis.getVoices(),a.voice=a.voices[0]})},a.speak=function(){var b=a.term?a.term.definition:"Pick something to say",c=new SpeechSynthesisUtterance(b);a.voice&&(c.voice=a.voice),c.rate="number"!=typeof a.rate?parseFloat(a.rate):a.rate,window.speechSynthesis.speak(c)}):a.speak=function(){},a.terms=b("/data.json").query(function(b){if(b){var c=Math.floor(Math.random()*b.length);a.term=b[c]}})}]);