// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-ui-router';
import 'angular-messages';

import AppController from 'src/AppController';
import Myapp from 'src/myapp/Myapp';
import moment from 'moment-timezone';


export default angular.module( 'starter-app', [ 'ngMaterial','ui.router', 'ngMessages',Myapp.name])
    .config(($mdIconProvider, $mdThemingProvider, $stateProvider, $locationProvider, $mdDateLocaleProvider) => {
        //$locationProvider.html5Mode(true);//HTML5 url mode
        // Register the user `avatar` icons
        $mdIconProvider
            .icon("stopwatch", "./assets/svg/stopwatch.svg", 24)
            .icon("menu", "./assets/svg/menu.svg", 24)
            .icon("video-player", "./assets/svg/video-player.svg", 24);

        $mdThemingProvider.theme('default')
            .primaryPalette('amber')
            .accentPalette('red');


        $mdDateLocaleProvider.formatDate = function(date) {
            return moment(date).format('MM/DD/YYYY');
        };

        $mdDateLocaleProvider.parseDate = function(dateString) {
            var m = moment(dateString, 'MM/DD/YYYY', true);
            return m.isValid() ? m.toDate() : new Date(NaN);
        };

        $stateProvider
            .state('convert', {
                url: "/convert",
                template: '<convert timezonelist="app.timezonelist"></convert>'
            })
            .state('movie', {
                url: "/movie",
                template: '<movie></movie>'
            })
            .state('movieDetail', {
                url: "/movie/:movieid",
                template: '<movie movieid="$resolve.movieid" moviedata="$resolve.moviedata" year="$resolve.year" title="$resolve.title"></movie>',
                params: {
                    moviedata: null,
                    movieid: null,
                    title: null,
                    year: null
                },
                resolve: {
                    movieid: ($stateParams) => $stateParams.movieid,
                    moviedata: ($stateParams) => $stateParams.moviedata,
                    year: ($stateParams) => $stateParams.year,
                    title: ($stateParams) => $stateParams.title,
                }
            });
    })
    .controller('AppController', AppController);