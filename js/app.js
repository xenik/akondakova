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
        ABOUT: '/about',
        COLLECTIONS: '/collections',
        INFO:'/info',
        NEWS: '/news',
        CONTACTS: '/contacts'
    },
    PATHS: {
        TEMPLATES: 'views/',
        MENU: 'views/partials/_menu.html',
        FOOTER: 'views/partials/_footer.html'
    }
});

app.run(['$rootScope', 'URLS', '$location',
    function ($rootScope, URLS, $location) {
        $rootScope.URLS = URLS;
    }]);

app.config(['$routeProvider', '$locationProvider', 'URLS',
    function ($routeProvider, $locationProvider, URLS) {

        //$locationProvider.hashPrefix('!');

        // configuring routing
        //var path = 'AKondakova' + URLS.PATHS.TEMPLATES;
        var path = '' + URLS.PATHS.TEMPLATES;

        // routing setup
        $routeProvider.when(URLS.ROUTES.ROOT, {
            templateUrl: path + 'root.html',
            controller: 'rootController as vm'
        });

        $routeProvider.when(URLS.ROUTES.ABOUT, {
            templateUrl: path + 'about.html'
        });

        $routeProvider.when(URLS.ROUTES.COLLECTIONS, {
            templateUrl: path + 'collections.html'
        });

        $routeProvider.when(URLS.ROUTES.INFO, {
            templateUrl: path + 'info.html'
        });

        $routeProvider.when(URLS.ROUTES.NEWS, {
            templateUrl: path + 'news.html'
        });

        $routeProvider.when(URLS.ROUTES.CONTACTS, {
            templateUrl: path + 'contacts.html',
            controller: 'contactsController as vm'
        });

        $routeProvider.otherwise({
            redirectTo: '/index.html'
        });


        //routing DOESN'T work without html5Mode
        //$locationProvider.html5Mode(true);
        //$locationProvider.html5Mode({
        //    enabled: true
        //    //requireBase: false
        //});
    }]);