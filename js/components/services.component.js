(function () {
  'use strict'

  angular.module('app')
    .component('services', {
      templateUrl: '/js/templates/services.html',
      controller: servicesController
    })

  function servicesController() {
    const vm = this

    vm.$onInit = function () {
    }
  }
}())
