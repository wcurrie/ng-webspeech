'use strict';

angular.module('talkerApp')
  .controller('TermsCtrl', function ($scope,$resource) {
        $scope.speachSupported = false;
        $scope.voice = "";
        $scope.rate = 1;
        if (window.speechSynthesis) {
            $scope.speachSupported = true;
            window.speechSynthesis.onvoiceschanged = function () {
                $scope.$apply(function () {
                    $scope.voices = window.speechSynthesis.getVoices();
                    $scope.voice = $scope.voices[0];
                });
            };
            $scope.speak = function () {
                var text = $scope.term ? $scope.term.definition : "Pick something to say";
                var msg = new SpeechSynthesisUtterance(text);
                if ($scope.voice) {
                    msg.voice = $scope.voice;
                }
                msg.rate = typeof($scope.rate ) != "number" ? parseFloat($scope.rate) : $scope.rate;
                window.speechSynthesis.speak(msg);
            }
        } else {
            $scope.speak = function() {};
        }
        $scope.terms = $resource("/data.json").query(function(terms) {
            if (terms) {
                var i = Math.floor(Math.random() * terms.length);
                $scope.term = terms[i];
            }
        });
  });
