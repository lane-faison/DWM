(function () {
  'use strict'

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true)
    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'home',
      })
      .state({
        name: 'story',
        url: '/story',
        component: 'story',
      })
      .state({
        name: 'team',
        url: '/team',
        component: 'team',
      })
      .state({
        name: 'services',
        url: '/services',
        component: 'services',
      })
      .state({
        name: 'press',
        url: '/press',
        component: 'press',
      })
      .state({
        name: 'newsletter',
        url: '/newsletter',
        component: 'newsletter',
      })
      .state({
        name: 'contact',
        url: '/contact',
        component: 'contact',
      })
  }
}())
