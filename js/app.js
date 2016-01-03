'use strict';

var app = angular.module('app', ['ngCookies', 'ngRoute']);

// CONSTANTS
app.constant('URLS', {
    IMAGES: {
        UNKNOWN: '/images/unknown.png'
        //AVATAR: '/JQFile/Avatar/'
    },
    ROUTES: {
        ROOT: '/',
        LOGIN: '/login',
        INSTITUTE_LIST: '/institute/list',
        INSTITUTE_CREATE: '/institute/create',
        INSTITUTE: '/institute/:id',
        PROFILE: '/profile',
        REGISTRATION: '/registration',
        REGISTRATION_COMPLETE: '/registration/complete/:id',
        DEMAND: {
            LIST: '/demand/list',
            DIGITALSIGNATURE: '/demand/digitalsignature'
        }
    },
    PATHS: {
        TEMPLATES: '/views/'
    }
});

app.config(['$routeProvider', '$locationProvider', 'URLS',
    function ($locationProvider, URLS) {

        // configuring routing
        //var path = '/TerminalFront' + URLS.PATHS.TEMPLATES;
        var path = '' + URLS.PATHS.TEMPLATES;

        // routing setup
        $routeProvider.when(URLS.ROUTES.ROOT, {
            templateUrl: path + 'root.html'
        });

        $routeProvider.when(URLS.ROUTES.LOGIN, {
            templateUrl: path + 'login.html',
            controller: 'authenticationController as vm'
        });

        $routeProvider.when(URLS.ROUTES.INSTITUTE_LIST, {
            templateUrl: path + 'instituteList.html',
            controller: 'instituteListController as vm'
        });

        $routeProvider.when(URLS.ROUTES.INSTITUTE_CREATE, {
            templateUrl: path + 'instituteCreate.html',
            controller: 'instituteCreateController as vm'
        });

        $routeProvider.when(URLS.ROUTES.PROFILE, {
            templateUrl: path + 'profile.html',
            controller: 'profileEditController as vm'
        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });


        //routing DOESN'T work without html5Mode
        //$locationProvider.html5Mode(true);
        //$locationProvider.html5Mode({
        //    enabled: true
        //    //requireBase: false
        //});
    }]);