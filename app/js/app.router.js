'use strict';

/**
 * Config for the router
 */

angular.module('app')
    .config(
        ['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG',
            function($stateProvider, $urlRouterProvider, JQ_CONFIG) {
                
                $urlRouterProvider
                    .otherwise('/landing');

                $stateProvider
                  .state('landing',{
                        url:'/landing',
                        templateUrl:'partials/landing.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/landing.js',
                                        '../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('access.register', {
                        url: '/register',
                        templateUrl: 'partials/ui-register.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/register.js','../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: 'partials/app.html'
                    })
                    .state('access', {
                        url: '/access',
                        template: '<div ui-view class=""></div>'
                    })
                    .state('access.login', {
                        url: '/login',
                        templateUrl: 'partials/ui-login.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/login.js',
                                        '../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('app.dashboard', {
                        url: '/calendar',
                        templateUrl: 'partials/ui-calendar.html',
                        resolve: {
                            deps: ['$ocLazyLoad', 'uiLoad',
                                function($ocLazyLoad, uiLoad) {
                                    return uiLoad.load(
                                        JQ_CONFIG.fullcalendar.concat('js/controllers/calendar.js')
                                    ).then(
                                        function() {
                                            return $ocLazyLoad.load('ui.calendar');
                                        }
                                    )
                                }
                            ]
                        }
                    })
                    .state('app.resume', {
                        url: '/resume',
                        templateUrl: 'partials/ui-resume.html',
                        resolve: {
                            deps: ['$ocLazyLoad', 'uiLoad',
                                function($ocLazyLoad, uiLoad) {
                                    // return uiLoad.load(['js/controllers/resume.js',
                                    //     '../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('app.ui', {
                        url: '/ui',
                        template: '<div ui-view class=""></div>'
                    })
                    .state('app.ui.search', {
                        url: '/search',
                        templateUrl: 'partials/ui-search.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/filters/search-startfrom.js', 'js/controllers/search.js', 'js/directives/ui-searchtabs.js','../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }

                    })
            }
        ]
    );
                 //.state('app.dashboard', {
                   //     url: '/dashboard',
                   //     templateUrl: 'partials/app_dashboard.html',
                   //     resolve: {
                   //         deps: ['$ocLazyLoad',
                   //             function($ocLazyLoad) {
                   //                 return $ocLazyLoad.load('chart.js').then(
                   //                         function() {
                   //                             return $ocLazyLoad.load('js/controllers/dashboard.js');
                   //                         }
                   //                     )
                   //                     .then(
                   //                       function(){
                   //                            return $ocLazyLoad.load('../bower_components/font-awesome/css/font-awesome.css');
                   //                         }
                   //                       )/*.then(
                   //                       function(){
                   //                             return $ocLazyLoad.load('js/directives/ui-todowidget.js');
                   //                      }
                   //                   )*/
                   //                 ;
                   //             }
                   //         ]
                   //     }
                   // })